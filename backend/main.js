const express = require('express');
const bodyParser = require('body-parser');
const async = require('async');
const CnnPool = require('./Routes/CnnPool.js');

const app = express();

const port = process.argv[process.argv.indexOf('-p') + 1];
if (!port) {
  console.log('Please specify a port number to run this server on');
  process.exit();
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Expose-Headers', 'Location');
  next();
});

app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).end();
});

app.use(bodyParser.json());

app.use(CnnPool.router);

app.use('/Meeting', require('./Routes/Meeting/Meeting.js'));

app.delete('/DB', (req, res) => {
  console.log('Resetting DB');
  let cbs = ['Meeting', 'Availability'].map(
    (table) => function (cb) {
      req.cnn.query(`delete from ${table}`, cb);
    },
  );

  cbs = cbs.concat(['Meeting', 'Availability'].map(
    (table) => (cb) => {
      req.cnn.query(`alter table ${table} auto_increment = 1`, cb);
    },
  ));

  async.series(cbs, (err) => {
    req.cnn.release();
    if (err) res.status(400).json(err);
    else res.status(200).end();
  });
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
