import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import './Viewer.css';

export default () => {
  console.log('Rendering Viewer');

  // test data
  const days = ['Mon', 'Wed', 'Fri', 'Sat'];
  const times = [
    '9:00am',
    '9:30am',
    '10:00am',
    '10:30am',
    '11:00am',
    '11:30am',
    '10:30am',
    '11:00am',
    '11:30am',
    '11:00am',
    '11:30am',
    '10:30am',
    '11:00am',
    '11:30am',
    '11:00am',
    '11:30am',
  ];

  return (
    <div className="selector-content">
      {/* create a row for each time in the times array */}
      {times.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {/* create a column for each day in the days array */}
          {days.map((day) => (
            // create a popup for every button that displays information
            // corresponding to who can attend a such meeting at the time given
            // by an aformentioned label.
            <Popup trigger={<div aria-label={day} className="cell cell-disabled" />} position="left center" on="hover">
              {time}
            </Popup>
          ))}
        </Row>
      ))}
      {/* create a row that displays labels on the "x axis" of the grid. */}
      <Row>
        <div className="time-label" />
        {days.map((dayname) => (
          <div className="daylabel">{dayname}</div>
        ))}
      </Row>
    </div>
  );
};
