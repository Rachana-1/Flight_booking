var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    uName : {type : String, required:true},
    email : {type: String, required: true},
    pwd : {type : String, required:true},
    token : {type: String},
    update_dt : {type : Date, required:true}
});

const bookingSchema = new Schema({
    user_email : {type: String},
    tripType : {type : String},
    fromPlace : {type:String},
    toPlace : {type: String},
    fromDate : {type: Date},
    toDate : {type : Date},
    count: {type: Number},
    luggage : {type : String},
    flight_name : {type: String},
    timing : {type: String},
    passenger_name1 : {type : String},
    passenger_name2 : {type : String},
    status : {type : String}
});



mongoose.model('Booking', bookingSchema);
mongoose.model('User', userSchema);
