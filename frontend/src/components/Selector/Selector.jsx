/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions,
react/prop-types */
import React, { useState } from 'react';
import { Row, Button, Modal } from 'react-bootstrap';
import './Selector.css';
import '../Meeting/Meeting.css';
import { useSelector } from 'react-redux';
import { postAvailabilitySelector } from '../../api';

const moment = require('moment');

moment().format();

const _ = require('lodash');

export default (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log('Rendering AvailabilitySelector');

  const name = useSelector((state) => state.Availability.name);

  // sample data
  // const name = 'SLO Hacks General Meeting';
  const startTime = '5:00am';
  const endTime = '12:30pm';
  // const timezone = 'PST';
  // const isReoccuring = true;
  const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  // making array of times
  const startT = moment(startTime, 'hh:mmA');
  const endT = moment(endTime, 'hh:mmA');
  const hours = [];

  hours.push(startT.format('hh:mmA'));

  while (startT.format('hh:mmA') !== endT.format('hh:mmA')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mmA'));
  }

  const [cellState, setCellState] = useState({
    cellList: days.map(() => []),
  });

  const onCellSelection = (dayIndex, time) => {
    if (cellState.cellList[dayIndex].includes(time)) {
      _.remove(cellState.cellList[dayIndex], (n) => n === time);
    } else {
      cellState.cellList[dayIndex].push(time);
    }

    setCellState({ cellList: cellState.cellList });
  };

  const handleSubmit = () => {
    const body = {
      ownerName: name,
      availability: cellState.cellList,
    };

    postAvailabilitySelector(body, props.meetingId);
  };

  return (

    <div className="selector-content">
      {hours.map((time) => (
        <Row>
          <div className="time-label">{time}</div>
          {days.map(
            (day, index) => (
              <div
                onClick={() => onCellSelection(index, time)}
                className={cellState.cellList[index].includes(time) ? 'cell cell-enabled' : ' cell cell-disabled'}
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

      <Button className="confirmbut" variant="primary" onClick={handleShow}>Confirm</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to submit these times?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="primary" type="button" onClick={() => { handleSubmit(); handleClose(); }}>Submit</Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
};
