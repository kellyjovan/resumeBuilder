var express = require('express'),
    router = express.Router(),
    Account = require('../models/account.js'),
    dbFunctions = require('../controllers/dbFunctions.js'),
    passport = require('passport');

router.get('/', function(req, res){
    Account.find({}, function(err, accounts){
        console.log(accounts);
        res.render('index',{
            page: 'home'
        });
    });
});

router.post('/signUp', function(req, res){
    //res.send(dbFunctions.addAccount(req.body));
    res.redirect('/' + dbFunctions.addAccount(req.body) + '/SignUp');
})

module.exports = router;
