// const baseURL = 'http://localhost:3001/';
import rp from 'request-promise';

export default function postOneTimeMeeting(state) {
  var OTM = {
    method: 'POST',
    uri: 'http://localhost:3001/Meeting',
    /*body: {
        name: state.meetingName, 
        startTime: state.startTime,
        endTime: state.endTime, 
        timeZone: state.timeZone,
        isReoccuring: state.isReoccuring, 
        isOneTime: state.isOneTime, 
        days: 'Test', //Incomplete
    },
    json: true, */
    resolveWithFulLResponse: true,
  };
  rp(OTM)
    .then(function (parsedBody) {
        //history.push(parsedBody.uri);
        console.log(parsedBody);
        console.log('PASSED');
    })
    .catch(function (err) {
        // POST failed...
        console.log('Failed')
    });
  return false;
}