var express = require('express'),
    router = express.Router(),
    Account = require('../models/account.js'),
    User = require('../models/user.js');

router.get('/login', function(req, res){
    res.render('login',{
        page: 'login'
    });
});

router.post('/login', function(req, res){
    console.log(req.body.email, req.body.password);
    Account.find({email: req.body.email, password: req.body.password}, function(err, account){
        User.find({account_id: account[0]._id}, function(err,user){
            res.redirect('/' + user[0]._id + '/Profile');
        })
    })
});

module.exports = router;
