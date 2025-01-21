 
const captainModel = require('../models/captainModel');
// const { collection } = require('../models/userModel');
const captainServices = require('../services/captainServices');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistTokenModel');

module.exports.registerCaptain = async (req, res , next) => {
   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstname, email, password, vehicle } = req.body;

        


        const isCaptain = await captainModel.findOne({ email });
        if (isCaptain) {
            return res.status(400).json({ message: "Captain already exists" });
        }

        const hashPassword = await captainModel.hashPassword(password) ;

        const captain = await captainServices.createCaptain({
                            firstname,
                            email,
                            password: hashPassword,
                            color: vehicle.color,
                            plate: vehicle.plate,
                            capacity: vehicle.capacity, 
                            vehicleType: vehicle.vehicleType 
                    });  

        const token = captain.generateAuthToken();
        console.log("this is the token",token);
        res.status(201).json({ token, captain  });

        
    } 

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel
        .findOne({ email })
        .select("+password");
    if (!captain) {
        return res.status(404).json({ message: "invalid email land password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "invalid email land password" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain= async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "unauthorised" });
    }
    await blacklistTokenModel.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "logged out" });
}

    
        
        // res.status(201).json({ token, captain  });
       
        // console.log("this is the token",token);
        
    
