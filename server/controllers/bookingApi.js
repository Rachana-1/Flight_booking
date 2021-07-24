var mongoose = require('mongoose');
var Booking = mongoose.model('Booking');

exports.postNewBookingDetails = (req,res,next) => {
  var booking = new Booking(req.body);
  booking.save().then(data=> {
    res.status(200).send(data);
  }).catch(err=>{
    res.status(500).send(err);
  }) 
}

exports.getBookingDetails = (req,res,next) =>{
  Booking.find({"user_email": req.params.email}).then(data=>{
    res.status(200).send(data);
  }).catch(err=>{
    res.status(500).send(err);
  })
}

exports.getBookingDetailsById = (req,res,next) => {
  Booking.find({"_id": req.params.id}).then(dat=>{
    res.status(200).send(dat);
  }).catch(err=>{
    res.status(500).send(err);
  })
}

exports.updateBookingDetails = (req,res,next) =>{
  var bookingDetails = req.body;
  bookingDetails.status = 'BOOKED';
  Booking.update({"_id": req.params.id}, {$set : bookingDetails}).then(data=>{
    console.log('SUccess');
    res.status(200).send(data);
  }).catch(err=>{
    res.status(500).send(err);
  })
}

exports.deleteBooking = (req,res,next) => {
  Booking.update({"_id": req.params.id}, {$set : {"status": "CANCELLED"}}).then(data=>{
    res.status(200).send(data);
  }).catch(err=>{
    res.status(500).send(err);
  })
}
