
const captainModel = require('../models/captainModel');




module.exports.createCaptain = async ({
    firstname, email, password, 
    color, plate , capacity , vehicleType
}) => {
    
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required including firstname, email, password, color, plate, capacity, vehicleType");
       
    }

        const captain = await captainModel.create({
            firstname,
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        return captain;

}
