/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Selector.css';
import './Container.css';

const moment = require('moment');
// require
moment().format();

const _ = require('lodash');

export default () => {
  console.log('Rendering AvailabilitySelector');

  // sample data
  // const name = 'SLO Hacks General Meeting';
  const startTime = '5:00am';
  const endTime = '12:30pm';
  // const timezone = 'PST';
  // const isReoccuring = true;
  const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  // making array of times
  const startT = moment(startTime, 'hh:mm A');
  const endT = moment(endTime, 'hh:mm A');
  const hours = [];

  hours.push(startT.format('hh:mm A'));

  while (startT.format('hh:mm A') !== endT.format('hh:mm A')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mm A'));
  }

  const [cellState, setCellState] = useState({
    cellList: days.map(
      (day, index) => {
        console.log(day);
        console.log(index);
        return [];
      },
    ),
  });

  const onCellSelection = (dayIndex, time) => {
    if (cellState.cellList[dayIndex].includes(time)) {
      _.remove(cellState.cellList[dayIndex], (n) => n === time);
    } else {
      cellState.cellList[dayIndex].push(time);
    }

    setCellState({ cellList: cellState.cellList });
  };
  console.log(cellState);

  return (

    <div className="selector-content">
      {hours.map((timey) => (
        <Row>
          <div className="time-label">{timey}</div>
          {days.map(
            (day, index) => (
              <div
                onClick={() => onCellSelection(index, timey)}
                className={cellState.cellList[index].includes(timey) ? 'cell cell-enabled' : ' cell cell-disabled'}
              />
            ),
          )}

        </Row>
      ))}
      <Row>
        <div className="time-label">
          {' '}
          {}
          {' '}
        </div>
        {days.map((dayname) => (
          <div className="daylabel">{dayname}</div>

        ))}

      </Row>

    </div>

  );
};
