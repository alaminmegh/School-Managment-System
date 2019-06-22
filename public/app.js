
  // All Require Declaration
var express = require( 'express' );
var ejs = require( 'ejs' );
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var home = require('./controllers/home');
var login = require('./controllers/login');
var logout = require('./controllers/logout');
var admin = require('./controllers/admin');
var student = require('./controllers/student');
var teacher = require('./controllers/teacher');

var app = express();


  // All Variable Declaration
// var hostname = '127.0.0.1';
var port = 3600;

  // All Configuration
// app.set('views', './views')  // specify the views directory
app.set( 'view engine', 'ejs' )   // register the template engine

  // All Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':false}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use('/home', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/admin', admin);
app.use('/student', student);
app.use('/teacher', teacher);

  // All Routing
app.get( '/', function( req, res ) {
  res.send( "Welcome Here" );
});

// app.get( '/home', function( req, res ) {
//   res.render( "home/home" );
// });


  // Server Started Up Here
app.listen( port, function(){
  console.log( "Server Started at " + port );
});
