var express     = require('express'),
    router      = express.Router(),
    Account        = require('../models/account.js');

router.get('/', function(req, res){
    Account.find({}, function(err, accounts){
        console.log(accounts);
        res.render('index',{
            page: 'home',
            nav_btns: []
        });
    });
});

router.post('/signUp', function(req, res){
    var newAccountData = req.body;
    console.log(newAccountData);
    var newAccount = new Account({
        email: newAccountData.email,
        password: newAccountData.password
    });

    newAccount.save(function(err){
        if(err) throw err;
        console.log('Account Created!');
    });

    res.redirect('/' + newAccount._id +'/SignUp');
})

module.exports = router;
