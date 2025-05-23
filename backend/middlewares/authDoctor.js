import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req,res,next)=>{
    try {
        const token = req.headers['dtoken'];
        console.log("Received token:", token);

        if(!token){
            return res.json({success:false, message :"Not Authorized Login"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        req.doctor = { docId: token_decode.id };
        
        next()
            
    } catch (error) {
        console.log(error)
        res.json({success:false, message :error.message})
    }
}
export default authDoctor