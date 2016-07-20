var Account = require('../models/account.js'),
    User = require('../models/user.js'),
    Experience = require('../models/experience.js'),
    Education = require('../models/education.js'),
    Volunteer = require('../models/volunteer.js'),
    mongoose =require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId,
    crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var dbFunctions = {};
dbFunctions.encrypt = function(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}
dbFunctions.decrypt = function(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}
dbFunctions.addAccount = function(data){
    var newAccount = new Account({
        email: data.email,
        password: encrypt(data.password)
    });

    newAccount.save(function(err){if(err) throw err;console.log('Account Created!');});

    return newAccount._id;
}
dbFunctions.addUser = function(acc_id, data){
    console.log('reached');
    var newUser = new User({
        first_name: data.first_name,
        middle_init: data.middle_init,
        last_name: data.last_name,
        account_id: acc_id
    });
    newUser.save(function(err){if(err) throw err;console.log('User Created!');});
    return newUser._id;
}
dbFunctions.addExperience = function(data){
    var newExperience = new Experience({
        job_position: data.job_position,
        job_description: data.job_description,
        company_name: data.company_name,
        profile_id: data.usr_id
    });
    console.log(newExperience);
    newExperience.save(function(err){if(err)throw err; console.log('User Experience Added.')});
}
dbFunctions.addEducation = function(data){
    var newEducation = new Education({
        name_of_institution: data.name_of_institution,
        degree: data.degree,
        year_graduated: data.year_graduated,
        field_of_study: data.field_of_study,
        type_of_institution: data.type_of_institution,
        profile_id: data.usr_id
    });
    newEducation.save(function(err){if(err)throw err; console.log('User Education Added.')});
}
dbFunctions.addVolunteerExp = function(data){
    var newVolunteer = new Volunteer({
        organization: data.organization,
        role: data.role,
        cause: data.cause,
        description: data.description,
        profile_id: data.usr_id
    });
    newVolunteer.save(function(err){if(err)throw err; console.log('User Volunteer Added.')});
}
module.exports = dbFunctions;
