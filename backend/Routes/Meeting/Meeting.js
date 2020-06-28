var Express = require('express');
var router = Express.Router({caseSensitive: true});


router.baseURL = '/Meeting';

router.post('/', (req, res) => {
   console.log('Hitting Meeting POST endpoint')

   res.end();
});

router.get('/:meetingId', (req, res) => {
   const meetingId = req.params.meetingId;

   console.log(`Hitting meeting GET with id ${meetingId}`);

   res.end();
});

router.post('/:meetingId/Availabilty/:name', (req, res) => {
   const meetingId = req.params.meetingId;
   const name = req.params.name;

   console.log(`Hitting post availability with ${meetingId} and ${name}`);

   res.end();
});

module.exports = router;