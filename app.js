
  // All Require Declaration
var express = require( 'express' );
var ejs = require( 'ejs' );
var app = express();


  // All Variable Declaration
// var hostname = '127.0.0.1';
var port = 3600;

  // All Configuration
// app.set('views', './views')  // specify the views directory
app.set( 'view engine', 'ejs' )   // register the template engine

  // All Middleware
app.use(express.static(__dirname + '/public'));

  // All Routing
app.get( '/', function( req, res ) {
  res.send( "Welcome Here" );
});

app.get( '/home', function( req, res ) {
  res.render( "home/home" );
});


  // Server Started Up Here
app.listen( port, function(){
  console.log( "Server Started at " + port );
});
