
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  if( req.session.userid != "" ){
    req.session.userid = "";
  	res.redirect('/login');
	}else{
		res.redirect('/login');
	}
});
module.exports = router;
