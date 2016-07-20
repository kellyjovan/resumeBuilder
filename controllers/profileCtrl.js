var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    Experience = require('../models/experience.js'),
    Education = require('../models/education.js'),
    Volunteer = require('../models/volunteer.js'),
    dbFunctions = require('../controllers/dbFunctions.js');

router.get('/:id/Profile', function(req, res){

    var o = {edu: [],vol: [],exp: [],usr: {}};

    console.log(req.params.id);
    User.find({_id: req.params.id}, function(err, user){
        if(err) throw err;
        o.usr = user[0];
        getEducation();
    });

    function getEducation(){
        Education.find({profile_id: req.params.id}, function(err, edu){
            if(err) throw err;
            o.edu = edu;
            getVolunteerExperience();
        });
    };

    function getVolunteerExperience(){
        Volunteer.find({profile_id: req.params.id}, function(err, vol){
            if(err) throw err;
            o.vol = vol;
            getExperience();
        });
    };

    function getExperience(userResult, eduResult, volResult){
        Experience.find({profile_id: req.params.id}, function(err, exp){
            o.exp = exp;
            res.render('profile', {
                page: 'profile',
                results: o
            });
            //res.send({result: o});
        })
    }
});

router.post('/:id/editPage', function(req, res){
    res.redirect('/' + req.params.id + '/edit');
    //Remember to include ._id as an hidden field to get user_id
});

router.post('/:id/addExperience', function(req, res){
    //res.send(dbFunctions.addExperience(req.body));
    //Remember to include ._id as an hidden field to get user_id
    dbFunctions.addExperience(req.body);
    res.redirect('/' + req.params.id + '/Profile');
});

router.post('/:id/addEducation', function(req, res){
    // res.send(dbFunctions.addEducation(req.body));
    //Remember to include ._id as an hidden field to get user_id
    dbFunctions.addEducation(req.body);
    res.redirect('/' + req.params.id + '/Profile');
});

router.post('/:id/addVolunteerExp', function(req, res){
    // res.send(dbFunctions.addVolunteer(req.body));
    //Remember to include ._id as an hidden field to get user_id
    dbFunctions.addVolunteerExp(req.body);
    res.redirect('/' + req.params.id + '/Profile');
});

module.exports = router;
