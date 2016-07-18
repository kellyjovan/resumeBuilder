var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js');

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
    console.log(req.params.id);
    var user = User.find({_id:req.params.id}, function(err, user){
        user.first_name = userData.first_name;
        user.last_name = userData.last_name;
    });

    res.redirect('/' + req.params.id +'/Profile');
});

module.exports = router;
