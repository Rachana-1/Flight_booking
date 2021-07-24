var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

var BookingController = require('../controllers/bookingApi');
var UserController = require('../controllers/userApi');

router.post('/getUser', UserController.getUserDetails);

router.get('/getBookingDetails/:email', BookingController.getBookingDetails); 

router.get('/getUserById/:email',UserController.getUserDetailsById);

router.get('/getBookingById/:id',BookingController.getBookingDetailsById);

router.post('/postNewUser', UserController.postNewUserDetails);

router.post('/postNewBooking', BookingController.postNewBookingDetails);

router.put('/updateUser', UserController.updateUserDetails);

router.put('/updateBooking/:id', BookingController.updateBookingDetails);

router.delete('/deleteBooking/:id', BookingController.deleteBooking);

module.exports = router;
