// const baseURL = 'http://localhost:3001/';
import rp from 'request-promise';

export default function postOneTimeMeeting(state, dayArray) {
  const OTM = {
    method: 'POST',
    uri: 'http://localhost:3001/Meeting',
    body: {
      name: state.meetingName,
      startTime: state.startTime,
      endTime: state.endTime,
      timeZone: state.timeZone,
      isReoccuring: state.isReoccuring,
      isOneTime: state.isOneTime,
      days: dayArray,
    },
    json: true,
    resolveWithFullResponse: true,
  };
  const location = rp(OTM)
    .then((parsedBody) => {
      console.log('PASSED');
      return (parsedBody.headers.location);
    })
    .catch((err) => {
      console.log('Failed', err); // POST failed...
    });
  return location;
}
