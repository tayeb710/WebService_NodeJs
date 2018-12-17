var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var cors =require('cors');


Product = require('./models/product');
Provider= require('./models/provider');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var providersRouter = require('./routes/api/providersPosts');
var productsRouter = require('./routes/api/productsPosts');

var app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());


//Connect to Mongoose
mongoose.connect('mongodb://localhost/projetdb');
var db = mongoose.connection;
app.get('/',function (req,res) {
    res.send('hello tt');
});
const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`server ${port}`));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productsPosts', productsRouter);
app.use('/providersPosts', providersRouter);


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



