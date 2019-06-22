var express = require('express');
var mysql = require('mysql');
var router = express.Router();


router.get('/', function (req, res) {

	// var connection = mysql.createConnection({
	// 	host     : 'localhost',
	//   	user     : 'root',
	//   	password : '',
	//   	database : 'node1'
	// });
  //
	// connection.connect(function(err) {
	//   if (err) {
	//     console.error('error connecting: ' + err.stack);
	//     return;
	//   }
  //
	//   console.log('connected as id ' + connection.threadId);
	// });
  //
	// var sql = "SELECT * FROM user";
	// connection.query(sql, function (error, results) {
  //
	// 	if(req.session.un != "" ){
  //
	// 		console.log(results);
			res.render('home/home');
		// }else{
		// 	res.redirect('/login');
		// }

	});

	// connection.end(function(err) {
	//   // The connection is terminated now
	// });

module.exports = router;
