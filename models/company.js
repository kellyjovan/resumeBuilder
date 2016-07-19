var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var companySchema = new Schema({
    company_name: String,
    company_address: String,
    url: String
});

var Company = mongoose.model('Company', companySchema);
module.exports = Company;
