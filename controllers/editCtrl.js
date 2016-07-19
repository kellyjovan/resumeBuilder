var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js');

router.get('/:id/edit', function(req, res){
    User.find({_id: req.params.id}, function(err, user){
        res.render('edit', {
            page: 'edit'
        });
    });
});

router.post('/:id/edit', function(req, res){
    var userData = req.body;
    console.log(req.params.id);
    User.find({_id:req.params.id}, function(err, user){
        user = user[0];
        user.first_name = userData.first_name;
        user.last_name = userData.last_name;
        user.save(function(err){
            if(err) throw err;
            console.log('User Updated');
        });
    });

    res.redirect('/' + req.params.id +'/Profile');
});

module.exports = router;
