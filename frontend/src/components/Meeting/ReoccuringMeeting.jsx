import React, { useState } from 'react';
import {
  Button, Col, Form,
} from 'react-bootstrap';
import './ReoccuringMeeting.css';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';

export default () => {
  console.log('Rendering ReoccuringMeeting');

  const Mon = 'Mon';
  const Tue = 'Tue';
  const Wed = 'Wed';
  const Thu = 'Thu';
  const Fri = 'Fri';
  const Sat = 'Sat';
  const Sun = 'Sun';

  const [dayStates, setDayStates] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const onDaySelection = (day) => {
    switch (day) {
      case (Mon):
        setDayStates({ ...dayStates, Mon: !(dayStates.Mon) });
        break;
      case (Tue):
        setDayStates({ ...dayStates, Tue: !(dayStates.Tue) });
        break;
      case (Wed):
        setDayStates({ ...dayStates, Wed: !(dayStates.Wed) });
        break;
      case (Thu):
        setDayStates({ ...dayStates, Thu: !(dayStates.Thu) });
        break;
      case (Fri):
        setDayStates({ ...dayStates, Fri: !(dayStates.Fri) });
        break;
      case (Sat):
        setDayStates({ ...dayStates, Sat: !(dayStates.Sat) });
        break;
      case (Sun):
        setDayStates({ ...dayStates, Sun: !(dayStates.Sun) });
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ borderRadius: '20px', backgroundColor: '#EFEFEF', padding: '24px' }}>
      <h3>Reoccuring Meeting</h3>
      <Form>
        {/* meeting title input */}
        <Form.Group>
          <Form.Label className="font-weight-bold">Meeting Title</Form.Label>
          <Form.Control type="meeting-title" placeholder="Meeting Title" />
        </Form.Group>

        {/* start/end time input */}
        <Form.Group>
          <Form.Row>
            <Form.Label className="font-weight-bold mt-1">Start</Form.Label>
            <Col>
              <Form.Control controlId="startTime" as="select" placeholder="9:00 am">
                {START_OPTIONS}
              </Form.Control>
            </Col>
            <Form.Label className="font-weight-bold mt-1">End</Form.Label>
            <Col>
              <Form.Control controlId="endTime" as="select" placeholder="5:00 pm">
                {END_OPTIONS}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>

        {/* day selection input */}
        <Form.Row className="justify-content-center">
          <Form.Group>
            <Form.Label className="font-weight-bold mt-1 mb-n1">Select the days available for your meeting</Form.Label>
            <Form.Row>
              <Col>
                <div onClick={() => onDaySelection(Mon)} onKeyPress={() => onDaySelection(Mon)} role="button" tabIndex={0} aria-label="Monday" className={dayStates.Mon ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Mon</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Tue)} onKeyPress={() => onDaySelection(Tue)} role="button" tabIndex={0} aria-label="Tuesday" className={dayStates.Tue ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Tue</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Wed)} onKeyPress={() => onDaySelection(Wed)} role="button" tabIndex={0} aria-label="Wednesday" className={dayStates.Wed ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Wed</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Thu)} onKeyPress={() => onDaySelection(Thu)} role="button" tabIndex={0} aria-label="Thursday" className={dayStates.Thu ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Thu</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Fri)} onKeyPress={() => onDaySelection(Fri)} role="button" tabIndex={0} aria-label="Friday" className={dayStates.Fri ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Fri</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Sat)} onKeyPress={() => onDaySelection(Sat)} role="button" tabIndex={0} aria-label="Saturday" className={dayStates.Sat ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Sat</Form.Label>
              </Col>
              <Col>
                <div onClick={() => onDaySelection(Sun)} onKeyPress={() => onDaySelection(Sun)} role="button" tabIndex={0} aria-label="Sunday" className={dayStates.Sun ? 'day-enabled' : 'day-disabled'} />
                <Form.Label className="day-of-week">Sun</Form.Label>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form.Row>
        <Button className="primary" type="submit">Create Event</Button>
      </Form>
    </div>
  );
};
