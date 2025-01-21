const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistTokenModel')
const captainModel = require('../models/captainModel')


module.exports.authUser = async (req ,res ,next)=>{

    const token = req.cookies.token || req.headers.authorization.split(' ')[1] ;
    if(!token){
        return res.status(401).json({message : "unauthorised" })
        }
        const isBlacklisted = await blacklistTokenModel.findOne({token : token})
        if (isBlacklisted) {
            console.log("Token is blacklisted");
            return res.status(401).json({ message: "unauthorised" });
        }
    
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await userModel.findById(decoded._id);
    
            if (!req.user) {
                console.log("User not found");
                return res.status(401).json({ message: "Invalid token" });
            }
    
        
            return next();
        } catch (err) {
            console.log("Token verification failed:", err.message);
            return res.status(401).json({ message: "Invalid token" });
        }
        
}

module.exports.authCaptain = async (req ,res ,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1] ;
    if(!token){
    return res.status(401).json({message : "unauthorised" })
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token : token})
    if (isBlacklisted) {
        console.log("Token is blacklisted");
        return res.status(401).json({ message: "unauthorised" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const captain = await captainModel.findById(decoded._id);

     
        req.captain = captain;
        if (!req.captain) {
            console.log("Captain not found");
            return res.status(401).json({ message: "Invalid token" });
        }

    
        return next();
    } catch (err) {
        console.log("Token verification failed:", err.message);
        return res.status(401).json({ message: "Invalid token" });
    }
    
}