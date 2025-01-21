const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        minlength: [3, 'Your name must be at least 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [4, 'Your password must be at least 4 characters'],
        select: false
    }, 
    socketId: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'

    },
    vehicle: {
        color:{
            type: String,
            required: [true, 'Please enter your vehicle color']
        },
        plate:{
            type: String,
            required: [true, 'Please enter your vehicle plate number']
        },
        capacity:{
            type: Number,
            required: true,
        },
        vehicleType:{
            type: String,
            enum: ['car',  'auto', 'motorcycle'],
            required: [true, 'Please enter your vehicle type']
        }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        },
    },
 
})
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '24h' })

    return token
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}


const captainModel = mongoose.model('captain' , captainSchema)

module.exports = captainModel;
