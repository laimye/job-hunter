var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: String,
	googleId: String,
	profileImage: String,
	googleToken: String
});

module.exports = mongoose.model('User', userSchema);