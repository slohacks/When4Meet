import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import './Viewer.css';

const moment = require('moment');

export default () => {
  console.log('Rendering Viewer');

  // test data
  const users = [
    { name: 'JP', availability: [['09:00am'], ['12:00pm'], ['11:00am'], []] },
    { name: 'Shriya', availability: [['10:00am'], ['12:00pm'], ['11:00am'], []] },
    { name: 'Cole', availability: [['10:00am'], ['12:30pm'], ['11:00am'], []] },
    { name: 'Jack', availability: [['10:00am'], ['12:30pm'], ['11:00am'], []] },
    { name: 'Sam', availability: [['10:00am'], ['12:30pm'], [], []] },
    { name: 'Max', availability: [['10:00am'], [], [], []] },
    { name: 'Kyle', availability: [['10:00am'], [], [], []] },
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

  const createCell = (usersAvailable) => {
    const usersAvailableLength = usersAvailable.length;
    switch (true) {
      case (usersAvailableLength === 0):
        return <div className="cell cell-disabled" />;
      case (usersAvailableLength >= 5):
        return (
          <Popup trigger={<div className="cell cell-enabled-5" />} position="left center" on="hover">
            {usersAvailable.map((filteredUser) => filteredUser.name).join(', ')}
          </Popup>
        );
      default:
        return (
          <Popup trigger={<div className={`cell cell-enabled-${usersAvailableLength}`} />} position="left center" on="hover">
            {usersAvailable.map((filteredUser) => filteredUser.name).join(', ')}
          </Popup>
        );
    }
  };

  return (
    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map((day, index) => {
            const usersAvailable = users.filter((user) => user.availability[index].includes(time));
            return createCell(usersAvailable);
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
