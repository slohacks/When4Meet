import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';
import './Meeting.css';
import postOneTimeMeeting from './../../api.js';

export default () => {
  console.log('Rendering OneTimeMeeting');
  
  const [dateChange, setDateChange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const initialInput = {
    meetingName: "",
    startTime: "9:00am",
    endTime: "5:00pm",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone.toString(),
    isRecurring: null,
    isOneTime: true,
    //days: ["Test", "Test2"],
  };
  const [state, setState] = useState(initialInput);
  const {meetingName, startTime, endTime} = state;
  
  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value});
  }
  const handleFinalSubmit = e => {
    postOneTimeMeeting(state);
  }

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
                fixedHeight={true}
                showDateDisplay={false}
                onChange={(item) => setDateChange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateChange}
              />
            </Col>
          </Form.Group>
        </Form.Row>
        <Button 
          className="primary" 
          type="button" /* put this back when done testing type="submit"*/
          onClick={handleFinalSubmit}>
            Create Event
            </Button>
      </Form>
    </div>
  );
};
