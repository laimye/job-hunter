var express = require('express');
var router = express.Router();
var jobsController = require('../controllers/jobs');

/* All /api routes */
router.get('/jobs', jobsController.getAll);
router.post('/jobs', jobsController.create);
router.get('/jobs/:id', jobsController.show);
router.delete('/jobs/:id', jobsController.deleteJob);
router.put('/jobs/:id', jobsController.updateJob);
router.post('/jobs/:id/comments', jobsController.addComment);
router.delete('/comments/:id', jobsController.deleteComment);
router.post('/jobs/:id/steps', jobsController.addStep);
router.delete('/steps/:id', jobsController.deleteStep);

module.exports = router;
