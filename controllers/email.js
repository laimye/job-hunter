var Job = require('../models/job');

var google = require('googleapis');
var googleAuth = require('google-auth-library');

module.exports = {
	checkEmail
}

function checkEmail(req, res) {
	var gmail = google.gmail('v1');
	gmail.users.labels.list({
	    auth: req.user.googleToken,
	    userId: 'me',
	  }, function(err, response) {
	    if (err) {
	      console.log('The API returned an error: ' + err);
	      return;
	    }
	    var labels = response.labels;
	    console.log('labels:', labels);
	 });
	res.json(labels)
}
