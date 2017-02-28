var express = require('express');
var router = express.Router();
var jobsController = require('../controllers/jobs');


/* All /api routes */
router.get('/jobs', jobsController.getAll);
router.post('/jobs', jobsController.create);
router.get('/jobs/:id', jobsController.show);

module.exports = router;
