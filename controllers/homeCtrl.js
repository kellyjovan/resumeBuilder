var express     = require('express'),
    router      = express.Router(),
    User        = require('../models/user.js');

router.get('/', function(req, res){
    User.find({}, function(err, users){
        console.log(users);
        res.render('index',{
            page: 'home',
            nav_btns: []
        });
    });
});

router.post('/signUp', function(req, res){
    var newUserData = req.body;
    console.log(newUserData);
    var newUser = new User({
        email: newUserData.email,
        password: newUserData.password
    });

    newUser.save(function(err){
        if(err) throw err;
        console.log('User Created!');
    });

    res.redirect('/' + newUser._id +'/SignUp');
})

module.exports = router;
