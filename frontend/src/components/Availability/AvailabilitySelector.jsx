/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions,
react/prop-types */
import React, { useState } from 'react';
import { Row, Button, Modal } from 'react-bootstrap';
import './Availability.css';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { postAvailability } from '../../api';

export default (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log('Rendering AvailabilitySelector');

  const name = useSelector((state) => state.Availability.name);
  const meeting = useSelector((state) => state.Meeting.selectedMeeting);

  const startTime = _.get(meeting, 'startTime', '9:00am');
  const endTime = _.get(meeting, 'endTime', '5:00pm');

  const days = _.get(meeting, 'days', ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']);

  // making array of times
  const startT = moment(startTime, 'hh:mma');
  const endT = moment(endTime, 'hh:mma');
  const hours = [];

  hours.push(startT.format('hh:mma'));

  while (startT.format('hh:mma') !== endT.format('hh:mma')) {
    startT.add(30, 'minutes');
    hours.push(startT.format('hh:mma'));
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
      availability: cellState.cellList.slice(0, days.length),
    };

    postAvailability(body, props.meetingId);
    handleClose();
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
                className={cellState.cellList[index].includes(time) ? 'cell cell-enabled-3' : ' cell cell-disabled'}
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
          <Button className="primary" type="button" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
};
