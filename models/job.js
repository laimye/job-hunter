var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: String,
	title: String,
	email: String,
	phone: String
})

var jobSchema = new Schema({
	company: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	appliedOn: {
		type: Date,
		required: true,
		default: Date.now,
	},
	description: String,
	interestLevel: {
		type: String,
		enum: ['High', 'Medium', 'Low']
		// default: 'Medium'
	},
	status: {
		type: String,
		enum: ['Rejected', 'Pending', 'Interview', 'Applied', 'Offer']
		// default: 'Applied'
	},
	source: String,
	resumeVersion: String,
	followUp: {
		type: Date		// default: function() { return Date.now() + (7 * 1000 * 60 * 60 * 24) }
	},
	nextSteps: String,
	comments: String,
	contacts: [contactSchema],
	applicant: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Job', jobSchema);