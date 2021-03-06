/* eslint-disable */
import * as api from '../api';

export function updateMeeting(meetingId, cb) {
  return (dispatch, prevState) => {
    api.getMeeting(meetingId)
    .then(meetingResp => dispatch({type: 'SET_MEETING', meeting: meetingResp}));
  };
}

export function updateAvailability(meetingId, cb) {
  return (dispatch, prevState) => {
    api.getAvailability(meetingId)
    .then(availabilityResp => dispatch({type: 'SET_AVAILABILITY', availability: availabilityResp}));
  };
}

export function setName(name) {
  return (dispatch, prevState) => {
    dispatch({type: 'SET_NAME', name});
  }
}
