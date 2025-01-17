const userModel = require('../models/userModel')

const userServices = require("../services/userServices")
const { validationResult } = require('express-validator')



module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { firstname, email, password } = req.body;

    const hashPassword = await userModel.hashpassword(password)
    try {
        const user = await userServices.createUser({
            firstname,
            email,
            password: hashPassword
        })
        const token = await user.generateAuthToken();
        res.status(201).json({ token, user })
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err })
    }

}

module.exports.loginUser = async (req ,res ,next)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
        }

    const {email , password} = req.body;
    // try{
        const user = await userModel.findOne({email}).select(`+password`);
        if(!user) return res.status(401).json({message : "invalid email and password"})
            const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(401).json({message : "invalid email and password"})

        const token = await user.generateAuthToken()
        res.status(200).json({token , user})
// }
        // catch(err){
            // res.status(401).json({message : "Invalid login credentials" , error : err})
            // }
}