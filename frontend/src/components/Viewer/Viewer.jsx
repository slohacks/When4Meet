/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import './Viewer.css';

const moment = require('moment');

export default () => {
  console.log('Rendering Viewer');

  moment().format();

  // test data
  const startTime = '9:00am';
  const endTime = '5:00pm';
  const days = ['Mon', 'Wed', 'Fri', 'Sat'];

  const startmil = moment(startTime, 'hh:mm A').format('HH:mm');
  const startt = moment(startmil, 'HH:mm');

  const endmil = moment(endTime, 'hh:mm A').format('HH:mm');
  const endt = moment(endmil, 'HH:mm');

  const hours = [];
  const duration = (endt.diff(startt, 'hours'));
  const endHour = parseInt(duration, 10);
  const startHour = startTime.slice(0, 4);

  for (let hour = 0; hour < endHour + 1; hour++) {
    hours.push(
      moment({ hour })
        .add(startHour, 'hours')
        .format('h:mm A'),
    );
    hours.push(
      moment({
        hour,
        minute: 30,
      })
        .add(startHour, 'hours')
        .format('h:mm A'),
    );
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
