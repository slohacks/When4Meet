var express = require('express');

var app = express();

var port = process.argv[process.argv.indexOf('-p') + 1];
if (!port) {
   console.log('Please specify a port number to run this server on');
   process.exit();
}

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Headers", "Content-Type");
   res.header("Access-Control-Expose-Headers", "Location");
   next();
});

app.options("/*", function(req, res) {
   res.header("Access-Control-Allow-Methods", 'GET, POST');
   res.status(200).end();
});

app.use('/Meeting', require('./Routes/Meeting/Meeting.js'));

app.use(function(req, res) {
   res.status(404).end();
});

app.listen(port, function() {
   console.log('App Listening on port ' + port);
});
