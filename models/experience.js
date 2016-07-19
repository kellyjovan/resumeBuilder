var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var experienceSchema = new Schema({
    job_position: String,
    job_description: String,
    company_name: String,
    start_date: Date,
    end_date: Date,
    profile_id: {type: ObjectId, ref: 'profile'}
});

var Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
