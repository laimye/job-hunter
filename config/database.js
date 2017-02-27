var mongoose = require('mongoose');

var db = mongoose.connect(process.env.DATABASE_URL);

db.connection.on('open', function() {
	console.log('connected to ${db.connection.name} on ${db.connection.host} ${db.connection.port}');
});