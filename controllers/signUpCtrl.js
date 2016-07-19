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
    // var userData = req.body;
    // console.log(userData);
    // console.log(req.params.id);
    // User.find({_id:req.params.id}, function(err, user){
    //     user = user[0];
    //     user.first_name = userData.first_name;
    //     user.last_name = userData.last_name;
    //     console.log(user);
    //     user.save(function(err){
    //         if(err) throw err;
    //         console.log('User Updated');
    //     });
    // });

    var userData = req.body;
    console.log(userData);
    var newUser = new User({
        first_name: userData.first_name,
        last_name: userData.last_name,
        account_id: req.params.id
    });

    console.log("Account Id: " + newUser.account_id);
    console.log("Profile Id: " + newUser._id);
    newUser.save(function(err){
        if(err) throw err;
        console.log('User Created!');
    })

    res.redirect('/' + newUser._id +'/Profile');
});

module.exports = router;
