import rp from 'request-promise';

export default function postReoccuringMeeting(body) {
  const options = {
    method: 'POST',
    uri: 'http://localhost:3001/Meeting',
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
