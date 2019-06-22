
var express = require('express');
var mysql = require('mysql');
var router 	= express.Router();


router.get('/', function (req, res) {
	res.render('login/login');
});

router.post( '/', function ( req, res ) {
	var connection = mysql.createConnection({
		host : 'localhost',
	  user : 'root',
	  password : '',
	  database : 'school'
	});

	connection.connect( function( err ){
		if( err ){
			console.error( 'error connecting: ' + err.stack );
	    return;
	  }

	 console.log('connected as id ' + connection.threadId);
	});

	var sql = "SELECT * FROM login where id='"+req.body.username+"' and password='"+req.body.password+"'";
	connection.query( sql, function ( error, results ){
		if( results.length > 0 ){
			req.session.userid = req.body.username;
			res.redirect('/student');
		}else{
			res.send("Invalid");
		}
	});
});
module.exports = router;
