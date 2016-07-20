var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    dbFunctions = require('../controllers/dbFunctions.js');

var user;

router.get('/:id/SignUp', function(req, res){
    User.find({_id: req.params.id}, function(err, user){
        console.log(user[0]);
        res.render('signUp', {
            user: user[0],
            page: 'signUp'
        });
    });
});

router.post('/:id/signUpCont', function(req, res){

    var userData = req.body;
    res.redirect('/' + dbFunctions.addUser(req.params.id, req.body) + '/Profile');
    // res.redirect('/' + newUser._id +'/Profile');
});

module.exports = router;
