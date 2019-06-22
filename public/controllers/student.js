
var express = require( 'express' );
var router = express.Router();

router.get( '/', function ( req, res ){
	if( req.session.userid != "" ){
		res.render( 'student/student', { uid: req.session.userid });
	}else{
		res.redirect('/login');
	}
});
module.exports = router;
