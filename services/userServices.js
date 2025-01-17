const userModel = require('../models/userModel')





module.exports.createUser = async({
    firstname,email, password
}) =>{
    if(!firstname || !email || !password ){
        throw new Error ('All fields are required')
    }
    const user = await userModel.create({
        firstname,
         email,
         password 
        })
        return user
        
}