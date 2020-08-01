import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import './Viewer.css';

const moment = require('moment');

export default () => {
  console.log('Rendering Viewer');

  // test data
  const testUsers = [
    { name: 'JP', availability: [['09:00am'], [], [], []] },
    { name: 'Shriya', availability: [['10:00am'], ['12:00am'], [], []] },
    { name: 'Cole', availability: [['10:00am'], ['12:30am'], [], []] },
  ];

  const startTime = '9:00am';
  const endTime = '5:00pm';
  const days = ['Mon', 'Wed', 'Fri', 'Sat'];

  const startT = moment(startTime, 'hh:mma');
  const endT = moment(endTime, 'hh:mma');
  const hours = [];

  hours.push(startT.format('hh:mma'));

  while (startT.format('hh:mma') !== endT.format('hh:mma')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mma'));
  }

  return (
    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map((day, index) => {
            const arr = testUsers.filter((user) => user.availability[index].includes(time));
            if (arr.length !== 0) {
              return (
                <Popup trigger={<div className="cell cell-disabled" />} position="left center" on="hover">
                  {arr.map((filteredUser) => filteredUser.name).join(', ')}
                </Popup>
              );
            }
            return <div className="cell cell-disabled" />;
          })}
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
