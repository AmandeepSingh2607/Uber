 
const captainModel = require('../models/captainModel');
// const { collection } = require('../models/userModel');
const captainServices = require('../services/captainServices');
const { validationResult } = require('express-validator');

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
    
        
        // res.status(201).json({ token, captain  });
       
        // console.log("this is the token",token);
        
    
