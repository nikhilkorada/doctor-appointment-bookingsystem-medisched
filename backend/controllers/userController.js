import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'
import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()

const registerUser = async (req, res) => {

    try {
        
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing details' })
        }

        if(!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Invalid email' })
        }

        if(password.length < 8){
            return res.json({ success: false, message: 'Password should be at least 8 characters' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData ={
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }

}

const loginUser = async (req, res) => {

    try {
        
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success: true, token})
        }else{
            res.json({success: false, message: 'Invalid credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }

}

const getProfile = async (req, res) => {

    try {
        
        const { userId } = req.user
        const userData = await userModel.findById(userId).select('-password')

        res.json({success: true, userData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }

}

const updateProfile = async (req, res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
      });

    try {
        
        const { userId } = req.user
        const {name, phone, address, dob, gender } = req.body
        const imageFile = req.file

        if(!name || !phone || !gender || !dob){
            return res.json({ success: false, message: 'Missing details' })
        }

        await userModel.findByIdAndUpdate(userId, {name, phone, address:JSON.parse(address),dob,gender})

        if(imageFile){
            const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: 'image'})
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, {image:imageUrl})
        }
        res.json({success: true, message: 'Profile updated '})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }

}

const bookAppointment = async (req, res) => {

    try {
        const { userId } = req.user
        const {  docId, slotDate, slotTime } = req.body
        const docData = await doctorModel.findById(docId).select('-password')

        if(!docData.available){
            return res.json({ success: false, message: 'Doctor not available' })
        }

        let slots_booked = docData.slots_booked

        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({ success: false, message: 'Slot already booked' })
            }else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            slotDate,
            slotTime,
            userData,
            docData,
            amount: docData.fees,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        await doctorModel.findByIdAndUpdate(docId, {slots_booked})

        res.json({success: true, message: 'Appointment booked successfully'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const listAppointment = async (req, res) => {

    try {
        const { userId } = req.user
        const appointments = await appointmentModel.find({userId})

        res.json({success: true, appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const cancelAppointment = async (req, res) => {

    try {
        
        const { userId } = req.user
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData.userId !== userId){
            return res.json({ success: false, message: 'Not authorized' })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})

        const {docId, slotDate, slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, {slots_booked})

        res.json({success: true, message: 'Appointment cancelled successfully'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

const paymentRazorpay = async (req, res) => {

    try {
        const {appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
    
        if(!appointmentData || appointmentData.cancelled){
            return res.json({success: false, message: 'Appointment Cancelled or Not Found'})
        }
    
        const options = {
            amount: appointmentData.amount * 100,
            currency: process.env.CURRENCY,
            receipt: appointmentId,
        }
    
        const order = await razorpayInstance.orders.create(options)
    
        res.json({success: true, order})
    
    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const verifyRazorpay = async (req, res) => {

    try {
        const {razorpay_order_id} = req.body.response
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        
        if(orderInfo.status === 'paid'){
            await appointmentModel.findByIdAndUpdate(orderInfo.receipt, {payment: true})
            res.json({success: true, message: 'Payment successful'})
        }else{
            res.json({success: false, message: 'Payment failed'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorpay, verifyRazorpay}