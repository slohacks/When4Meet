import React from 'react';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import './Availability.css';

const moment = require('moment');

export default () => {
  console.log('Rendering Viewer');

  const meeting = useSelector((state) => state.Meeting.selectedMeeting);
  const users = useSelector((state) => state.Availability.availability) || [];

  const startTime = _.get(meeting, 'startTime', '9:00am');
  const endTime = _.get(meeting, 'endTime', '5:00pm');
  const days = _.get(meeting, 'days', []);

  const startT = moment(startTime, 'hh:mma');
  const endT = moment(endTime, 'hh:mma');
  const hours = [];

  hours.push(startT.format('hh:mma'));

  while (startT.format('hh:mma') !== endT.format('hh:mma')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mma'));
  }

  const createCell = (usersAvailable, totalUsers) => {
    const usersAvailableLength = usersAvailable.length;
    let cellClassName = 'cell cell-enabled-';
    switch (usersAvailableLength) {
      case 0:
        return <div className="cell cell-disabled" />;
      case 1:
        cellClassName += '1';
        break;
      case 2:
        cellClassName += '2';
        break;
      case 3:
        cellClassName += '3';
        break;
      case 4:
        cellClassName += '4';
        break;
      default:
        cellClassName += '5';
        break;
    }
    return (
      <Popup trigger={<div className={cellClassName} />} position="left center" on="hover">
        <div className="popup-container">
          <h7 id="popup-header">
            {usersAvailableLength}
            /
            {totalUsers}
            {' '}
            Users Available:
          </h7>
          {usersAvailable.map((filteredUser) => (
            <div className="popup-item">
              {filteredUser.name}
            </div>
          ))}
        </div>
      </Popup>
    );
  };

  return (
    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map((day, index) => {
            console.log(time);
            console.log(users[0] && users[0].times[index]);
            const usersAvailable = users.filter((user) => user.times[index].includes(time));
            const totalUsers = users.length;
            return createCell(usersAvailable, totalUsers);
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
