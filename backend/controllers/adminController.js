import validator from 'validator';
import bycrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

//API for doctor edition

const addDoctor = async (req, res) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
      });

    try {
        const { name, email, password, speciality, degree, experience, fees, about, address } = req.body; 
        const imageFile = req.file

        //checking for all data to add doctors
        if(!name || !email || !password || !speciality || !degree || !experience || !fees || !about || !address){
            return res.json({success:false, message :"Missing required fields"})
        }

        //validating email
        if(!validator.isEmail(email)){
            return res.json({success:false, message :"Invalid email"})
        }

        //validating password
        if(password.length < 8){
            return res.json({success:false, message :"Password should be at least 8 characters"})
        }

        //hashing password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            fees,
            about,
            address:JSON.parse(address),
            image:imageUrl,
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message :"Doctor added successfully"})

    }catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }

}

//API for admin login
const loginAdmin = async (req, res) => {
    try{
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,  token})
        }
        else{
            res.json({success:false, message:"Invalid credentials"})
        }
    }catch(error){
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const allDoctors = async (req, res) => {

    try {
        
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const appointmentsAdmin = async (req, res) => {

    try {
        
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

const appointmentCancel = async (req, res) => {

    try {
        
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

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

const adminDashboard = async (req, res) => {

    try {
        
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0, 5),
        }

        res.json({success:true, dashData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}

export { addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard}