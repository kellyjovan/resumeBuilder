var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    Experience = require('../models/experience.js'),
    Education = require('../models/education.js');

router.get('/:id/Profile', function(req, res){
    // res.render('profile');

    // var userData, experienceData;
    //
    // User.find({_id: req.params.id}, function(err, user){
    //     userData = user[0];
    // }).then(Experience.find({profile_id: req.params.id}, function(err, experience){
    //     experienceData = experience;
    // })).then(function(){
    //     console.log("User: ", userData, "Experience: ", experienceData);
    // });
    //
    // res.render('profile', {
    //     user: userData,
    //     experience: experienceData,
    //     page: 'profile',
    //     nav_btns: ['Profile']
    // });

    console.log(req.params.id);
    User.find({_id: req.params.id}, function(err, user){
        if(err) throw err;
        getEducation(user[0]);
    });

    function getEducation(userResult){
        Education.find({profile_id: req.params.id}, function(err, edu){
            if(err) throw err;
            console.log(edu);
            getExperience(userResult, edu);
        });
    };

    function getExperience(userResult, eduResult){
        Experience.find({profile_id: req.params.id}, function(err, exp){
            res.render('profile', {
                user: userResult,
                education: eduResult,
                experience: exp,
                page: 'profile',
                nav_btns: ['Profile']
            });
        })
    }
});

router.post('/:id/editPage', function(req, res){
    res.redirect('/' + req.params.id + '/edit');
});

router.post('/:id/addExperience', function(req, res){
    var experienceData = req.body;
    var newExperience = new Experience({
        company_name: experienceData.company_name,
        job_position: experienceData.job_position,
        job_description: experienceData.job_description,
        profile_id: experienceData.id
    });
    newExperience.save(function(err){if(err)throw err; console.log('User Experience Added.')});

    res.redirect('/' + req.params.id + '/Profile');
});

router.post('/:id/addEducation', function(req, res){
    var educationData = req.body;
    console.log(educationData);
    var newEducation = new Education({
        name_of_institution: educationData.name_of_institution,
        degree: educationData.degree,
        field_of_study: educationData.field_of_study,
        profile_id: educationData.id
    });
    newEducation.save(function(err){if(err)throw err; console.log('User Education Added.')});

    res.redirect('/' + req.params.id + '/Profile');
});

module.exports = router;
