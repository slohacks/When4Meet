import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import './Viewer.css';

const moment = require('moment');

export default () => {
  console.log('Rendering Viewer');

  // test data
  const startTime = '9:00am';
  const endTime = '5:00pm';
  const days = ['Mon', 'Wed', 'Fri', 'Sat'];

  const startT = moment(startTime, 'hh:mmA');
  const endT = moment(endTime, 'hh:mmA');
  const hours = [];

  hours.push(startT.format('hh:mmA'));

  while (startT.format('hh:mmA') !== endT.format('hh:mmA')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mmA'));
  }

  return (
    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map((day) => (
            <Popup trigger={<div aria-label={day} className="cell cell-disabled" />} position="left center" on="hover">
              {time}
            </Popup>
          ))}
        </Row>
      ))}
      <Row>
        <div className="time-label" />
        {days.map((dayname) => (
          <div className="daylabel">{dayname}</div>
        ))}
      </Row>
    </div>
  );
};
