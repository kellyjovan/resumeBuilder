var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema({
    first_name: String,
    middle_init: String,
    last_name: String,
    created_at: Date,
    updated_at: Date,
    account_id: {type: ObjectId, ref: 'account'}
})

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
