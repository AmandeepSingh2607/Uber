// const mongoose = require('const')
const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true

    },   
    email:{
        type:String,
        required:true,
    },
    password:{ 
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
    return token
}

userSchema.methods.comparePassword =  async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashpassword = async function (password){
   return  await bcrypt.hash(password ,10)
}

const userModel = mongoose.model('user' , userSchema)

module.exports = userModel;