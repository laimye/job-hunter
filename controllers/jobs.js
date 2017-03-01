var Job = require('../models/job');

module.exports = {
	create,
	getAll,
	show,
	updateJob,
	deleteJob,
	addComment,
	deleteComment,
	addStep,
	deleteStep
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

function updateJob(req, res) {
	Job.findByIdAndUpdate(req.params.id, req.body).then(function(job) {
		res.json(job);
	})
}

function deleteJob(req, res, next) {
  Job.findByIdAndRemove(req.params.id)
  .then(deletedJob => {
    res.json(deletedJob);
  }).catch(err => res.status(400).json(err));
}

function addComment(req, res) {
	Job.findById(req.params.id)
	.then(job => {
		job.comments.push({
			//req.body.text - if just a string - no an object
			content: req.body.text,
			commenter: req.user._id
		});
		return job.save();
	})
	.then(job => {
		res.status(200).json(job);
	});
}

function deleteComment(req, res) {
	Job.findOne({'comments._id': req.params.id})
	.then(job => {
		job.comments.remove(req.params.id);
		return job.save();
	})
	.then(job => {
		res.status(200).json(job);
	});
}

function addStep(req, res) {
	Job.findById(req.params.id)
	.then(job => {
		job.steps.push({content: req.body.text});
		return job.save();
	})
	.then(job => {
		res.status(200).json(job);
	});
}

function deleteStep(req, res) {
	Job.findOne({'steps._id': req.params.id})
	.then(job => {
		job.steps.remove(req.params.id);
		return job.save();
	})
	.then(job => {
		res.status(200).json(job);
	});
}