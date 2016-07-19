var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var accountSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    roleID: {type: Number, default: 0, required: true}
    //0 - Public
    //1 - Companies
    //2 - Admin
});

var Account = mongoose.model('Account', accountSchema);
module.exports = Account;
