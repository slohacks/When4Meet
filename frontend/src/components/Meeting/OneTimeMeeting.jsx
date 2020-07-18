import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { Form, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';
import './Meeting.css';
import postOneTimeMeeting from '../../api';

export default () => {
  console.log('Rendering OneTimeMeeting');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  const initialInput = {
    meetingName: '',
    startTime: '9:00am',
    endTime: '5:00pm',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone.toString(),
    isRecurring: null,
    isOneTime: true,
  };
  const [state, setState] = useState(initialInput);
  const { meetingName, startTime, endTime } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const handleFinalSubmit = async () => {
    // Creates array of days for post request
    const dayArray = [];
    const startDate = moment(date[0].startDate);
    const endDate = moment(date[0].endDate);
    while (startDate.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD')) {
      dayArray.push(startDate.format('YYYY-MM-DD'));
      startDate.add(1, 'day');
    }
    // Make POST request and then redirect to meeting page
    const location = await postOneTimeMeeting(state, dayArray);
    history.push(location);
  };

  return (
    <div className="ui-container">
      <h3>One-Time Meeting </h3>
      <Form>
        <Form.Group>
          <Form.Label className="font-weight-bold">Meeting Title</Form.Label>
          <Form.Control name="meetingName" onChange={handleChange} value={meetingName} placeholder="Meeting Title" />
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Form.Label className="font-weight-bold mt-1">Start</Form.Label>
            <Col>
              <Form.Control name="startTime" onChange={handleChange} value={startTime} as="select">
                {START_OPTIONS}
              </Form.Control>
            </Col>
            <Form.Label className="font-weight-bold mt-1">End</Form.Label>
            <Col>
              <Form.Control name="endTime" onChange={handleChange} value={endTime} as="select">
                {END_OPTIONS}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Row className="justify-content-center">
          <Form.Group>
            <Form.Label className="font-weight-bold ml-4 mb-n1">Select the potential dates for your meeting</Form.Label>
            <Col>
              <DateRange
                fixedHeight
                showDateDisplay={false}
                moveRangeOnFirstSelection={false}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
              />
            </Col>
          </Form.Group>
        </Form.Row>
        <Button className="primary" type="button" onClick={handleFinalSubmit}>Create Event</Button>
      </Form>
    </div>
  );
};
