import rp from 'request-promise';

const baseURL = 'http://localhost:3001';

export function postOneTimeMeeting(state, dayArray) {
  const OTM = {
    method: 'POST',
    uri: `${baseURL}/Meeting`,
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
    .then((response) => {
      console.log('SUCCESS');
      return (response.headers.location);
    })
    .catch((err) => {
      console.log('FAILED', err);
    });
  return location;
}

export function postReoccuringMeeting(body) {
  const options = {
    method: 'POST',
    uri: `${baseURL}/Meeting`,
    body,
    json: true,
    resolveWithFullResponse: true,
  };

  const location = rp(options)
    .then((response) => {
      console.log('SUCCESS');
      return (response.headers.location);
    })
    .catch((err) => {
      console.log('FAILED', err);
    });
  return location;
}

export function postAvailabilitySelector(body) {
  const options = {
    method: 'POST',
    uri: `${baseURL}/Meeting/5/Availability`,
    body,
    json: true,
    resolveWithFullResponse: true,
  };

  const location = rp(options)
    .then((response) => {
      console.log('SUCCESS');
      return (response.headers.location);
    })
    .catch((err) => {
      console.log('FAILED', err);
    });
  return location;
}

export function getMeeting(meetingId) {
  const options = {
    method: 'GET',
    uri: `${baseURL}/Meeting/${meetingId}`,
    json: true,
  };

  return rp(options)
    .catch((err) => {
      console.log('FAILED GET MEETING ', err);
    });
}

export function getAvailability(meetingId) {
  const options = {
    method: 'GET',
    uri: `${baseURL}/Meeting/${meetingId}/Availability`,
    json: true,
  };

  return rp(options)
    .catch((err) => {
      console.log('FAILED GET AVAILABILITY ', err);
    });
}
