const express = require('express');
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')
const router = express.Router();

router.post('/signup', authController.signup);
router.patch('/verify/:verifyToken', authController.verifyUser)
router.post('/login', authController.login)
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:resetToken', authController.resetPassword)

router.use(authController.protect);

router.patch('/updatePassword', authController.updatePassword);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);
router.post('/logout', authController.logout);

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)
    
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)

module.exports = router;