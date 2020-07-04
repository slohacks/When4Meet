const Express = require('express');

const router = Express.Router({ caseSensitive: true });

router.baseURL = '/Meeting';

router.post('/', (req, res) => {
  console.log('Hitting Meeting POST endpoint');

  res.location('/meeting/0');
  res.end();
});

router.get('/:meetingId', (req, res) => {
  const { meetingId } = req.params;

  console.log(`Hitting meeting GET with id ${meetingId}`);

  res.end();
});

router.post('/:meetingId/Availabilty/:name', (req, res) => {
  const { meetingId } = req.params;
  const { name } = req.params;

  console.log(`Hitting post availability with ${meetingId} and ${name}`);

  res.end();
});

module.exports = router;
