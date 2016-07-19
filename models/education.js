var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var educationSchema = new Schema({
    name_of_institution: String,
    degree: String,
    year_graduated: Number,
    field_of_study: String,
    type_of_institution: String,
    profile_id: {type: ObjectId, ref: 'profile'}
});

var Education = mongoose.model('Education', educationSchema);
module.exports = Education;
