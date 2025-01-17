const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/userControlllers')

router.post('/register' ,[
    body('email').isEmail().withMessage('invalid message'),
    body('password').isLength({min: 3}).withMessage('password must be longer'),
    body('firstname').isLength({min: 3}).withMessage('name must be at least 3 chartater')
], 
userController.registerUser
)

router.post('/login' ,[
    body('email').isEmail().withMessage('invalid message'),
    body('password').isLength({min: 3}).withMessage('password must be longer')
],
userController.loginUser
 )


module.exports = router;