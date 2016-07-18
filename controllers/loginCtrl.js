var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js');

router.get('/login', function(req, res){
    res.render('login',{
        page:       'login',
        nav_btns:   []
    });
});

module.exports = router;
