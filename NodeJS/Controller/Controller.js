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
export const edit = (req,res)=>{
    const {id} = req.params
    const {userName} = req.body
    res.json(`The ${id} of the userName is ${userName} is Updated`)
}
export const deleteUser = (req,res)=>{
    const {id} = req.params
    res.json(`The ${id} of the user is Deleted Succesfully`)
}