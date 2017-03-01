var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new Schema({
	received: Date,
	body: String
});

var contactSchema = new Schema({
	name: String,
	title: String,
	email: String,
	phone: String,
	emails: [emailSchema]
});

var commentSchema = new Schema({
	content: String,
	commenter: {type: Schema.Types.ObjectId, ref: 'User'},
	createdAt: {type: Date, default: Date.now}
});

var stepSchema = new Schema({
	content: String,
	createdAt: {type: Date, default: Date.now},
	due: {type: Date, default: Date.now}
});

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
	},
	status: {
		type: String,
		enum: ['Rejected', 'Pending', 'Interview', 'Applied', 'Offer']
	},
	location: String,
	source: String,
	resumeVersion: String,
	followUp: {
		type: Date		// default: function() { return Date.now() + (7 * 1000 * 60 * 60 * 24) }
	},
	steps: [stepSchema],
	comments: [commentSchema],
	contacts: [contactSchema],
	applicant: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Job', jobSchema);