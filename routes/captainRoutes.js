const captainController = require('../controllers/captainControllers')
const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth')

router.post('/register' ,[
    body('email').isEmail().withMessage('invalid message'),
    body('password').isLength({min: 3}).withMessage('password must be longer'),
    body('firstname').isLength({min: 3}).withMessage('name must be at least 3 chartater'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 character'),
    body('vehicle.capacity').isLength({min:1}).withMessage('capacity must be at least 1 '),
    body('vehicle.vehicleType').isIn(['car', 'motocycle','auto']).withMessage('invalid vehicle'),

], captainController.registerCaptain

)

router.post('/login',[
    body('email').isEmail().withMessage('invalid message'),
    body('password').isLength({min: 3}).withMessage('password must be longer'),
], captainController.loginCaptain)


router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain)



module.exports = router;
 
 

