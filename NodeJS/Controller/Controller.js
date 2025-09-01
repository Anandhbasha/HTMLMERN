import User from "../Model/schema.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const read = async(req,res)=>{
    const studInfo = await User.find()
    return res.json(studInfo)
}

export const insert = async(req,res)=>{
    const {userName,Password} = req.body
    const existUser = await User.findOne({userName})
    if(existUser){
        return res.json({message:"User Already exist"})
    }
    const insertNew = await User({userName,Password}).save()
    return res.json({message:"New user Addes Sucessfully",insertNew})
}
export const edit = async(req,res)=>{
    try {
        const {userName} = req.params
        const {Mobile} = req.body
        const existingUser = await User.findOneAndUpdate({userName:userName},{$set:{Mobile}})
        if(!existingUser){
            res.json({message:"User Does't exist"})
        }
        res.json({message:`Updated ${userName} Succesfully`})
    } catch (error) {
        res.json(error)
    }
}
export const deleteUser = async(req,res)=>{
    try {
        const {userName} = req.params
        const deleteUser = await User.findOneAndDelete({userName:userName})
        if(!deleteUser){
            res.json({message:"User not exists"})
        }
        res.json({message:`${userName} deleted succesfully`})
    } catch (error) {
        res.json(error)
    }
}

export const registerNew = async(req,res)=>{
    try {
        const {userEmail,Password} = req.body
        const existing_User = await User.findOne({userEmail})
        if(existing_User){
            res.json({message:"already user Exist"})
        }
        const Salt = await bcrypt.genSalt(10)
        const hassPass = await bcrypt.hash(Password,Salt)
        const insertUser = await User({userEmail:userEmail,Password:hassPass}).save()
        res.json({message:`user Registered Succesfully ${insertUser}`})
    } catch (error) {
        res.json({error:"Unable to Insert User"})
    }
}

export const authUser = (req,res,next)=>{
    const auth = req.headers['authorization']
    if(!auth){
        res.json({message:"access denied"})
    }
    const token = auth.split(" ")[1]
    const decode = jwt.verify(token,'abcdef')
    req.user = decode
    next()

}
export const loginUser = async(req,res)=>{
    try{
        const {userEmail,Password} = req.body
        const existing_User = await User.findOne({userEmail})
        if(!existing_User){
            res.json({message:"user Not registered"})
        }
        const matchPassword = await bcrypt.compare(Password,existing_User.Password)
        if(!matchPassword){
            res.json({message:"Invalid Password"})
        }
        const token = jwt.sign({userEmail:existing_User.userEmail},"abcdef",{expiresIn:'5m'})
        res.json({token,data:{
            userEmail:userEmail
        }})
    }
    catch(err){
        res.json(err)
    }
}


