var Job = require('../models/job');

module.exports = {
	create,
	getAll,
	show
}

function getAll(req, res) {
	Job.find({applicant: req.user._id}).then(function(jobs) {
	  res.json(jobs);
	});
};

function create(req, res, next) {
	req.body.applicant = req.user._id;
	Job.create(req.body).then(function(job) {
		res.json(job);
	})
}

function show(req, res) {
	Job.findById(req.params.id).then(function(job) {
		res.json(job);
	})
}