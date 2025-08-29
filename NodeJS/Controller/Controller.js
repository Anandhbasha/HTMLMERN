import User from "../Model/schema.js"

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