/* eslint-disable */
import React from 'react';

export default (props) => {
  console.log('Rendering ReoccuringMeeting');

  return (
    <div>
      <form>
        <h1>Reoccuring Meeting</h1>
          <div id="meeting-input">
            <h2>Meeting Title</h2>
            <input type="text" placeholder="Meeting Title" />
          </div>
          <div id="time-input">
            <label for="start-time">Start</label>
            <input type="time" id="start-time" value="09:00" />
            <label for="end-time">End</label>
            <input type="time" id="end-time" value="17:00" />
          </div>
          <div id="time-available">
            <h2>Select the days available for your meeting</h2>
          </div>
      </form>
    </div>
  );
};
