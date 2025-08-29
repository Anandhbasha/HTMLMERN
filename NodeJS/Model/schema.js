import mongoose from "mongoose"

const newSchema = new mongoose.Schema({
    userName:String,
    Mobile:Number,
    Password:String
})

const User = mongoose.model("newUser",newSchema,"NewTable")

export default User