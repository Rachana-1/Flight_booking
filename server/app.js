var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();
var mailer = require('express-mailer');



var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDb', {useNewUrlParser: true}).then(() => {
  console.log('Mongodb Connected');
}).catch((err) => {
  console.log(`Mongodb Connection Failed : ${err}`);
});
// connecting database to local host




require('./models/model');

// view engine setup
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 var corsOptions = {
  origin: 'http://localhost:4200',
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   credentials: true
 }
 //connectiong front end to backend

 app.use(cors(corsOptions));



var apiRouter = require('./routes/api');





 app.use('/api', apiRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
