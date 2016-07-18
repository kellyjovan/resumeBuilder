var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    email:          {type: String, required: true},
    password:       {type: String, required: true},
    first_name:     String,
    last_name:      String,
    created_at:     Date,
    updated_at:     Date,
    skills:         [String],
    experience:     [{
                        job_title:          String,
                        company:            String,
                        job_description:    String,
                        start_date:         Date,
                        end_date:           Date,
                        location:           String
                    }],
    job_interests: [String],
    full_time:     Boolean
});

userSchema.pre('save', function(next){
    var currentDate = new Date();

    this.updated_at = currentDate;

    if(!this.created_at)
    {
        this.created_at = currentDate;
    }
    next();
})

var User = mongoose.model('User', userSchema);
module.exports = User;
