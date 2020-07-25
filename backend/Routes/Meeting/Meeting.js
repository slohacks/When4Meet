const Express = require('express');
const async = require('async');

const router = Express.Router({ caseSensitive: true });

router.baseURL = '/Meeting';

router.post('/', (req, res) => {
  console.log('Hitting Meeting POST endpoint');

  const { cnn, body } = req;
  body.days = JSON.stringify(body.days);

  async.waterfall([
    function (cb) {
      cnn.chkQry('insert into Meeting set ?', [body], cb);
    },
    function (result, fields, cb) {
      res.location(`${router.baseURL}/${result.insertId}`).end();
      cb();
    },
  ],
  (err) => {
    if (err) {
      console.log(err);
    }
    cnn.release();
  });
});

router.get('/:meetingId', (req, res) => {
  const { meetingId } = req.params;
  const { cnn } = req;

  async.waterfall([
    function (cb) {
      cnn.chkQry('select * from Meeting where id = ?', [meetingId], cb);
    },
    function (meetingArr, fields, cb) {
      if (meetingArr.length === 0) {
        res.status(404).end();
        cb();
      } else {
        const meeting = {
          ...meetingArr[0],
          days: JSON.parse(meetingArr[0].days),
        };
        res.json(meeting);
        cb();
      }
    },
  ],
  (err) => {
    if (err) {
      console.log(err);
    }
    cnn.release();
  });
});

router.get('/:meetingId/Availabilty/', (req, res) => {
  const { meetingId } = req.params;
  const { name } = req.params;

  console.log(`Hitting get availability with ${meetingId} and ${name}`);

  res.end();
});

router.post('/:meetingId/Availabilty/', (req, res) => {
  const { meetingId } = req.params;
  const { name } = req.params;

  console.log(`Hitting post availability with ${meetingId} and ${name}`);

  res.end();
});

module.exports = router;
