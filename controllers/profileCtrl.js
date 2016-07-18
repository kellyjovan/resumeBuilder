var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js');

router.get('/:id/Profile', function(req, res){
    // res.render('profile');

    User.find({_id: req.params.id}, function(err, user){
        res.render('profile', {
            user: user,
            page: 'profile',
            nav_btns: ['Profile']
        });
    })
})

module.exports = router;
