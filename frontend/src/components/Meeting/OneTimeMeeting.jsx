import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { START_OPTIONS, END_OPTIONS } from './MeetingConstants';

export default () => {
  console.log('Rendering OneTimeMeeting');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  return (
    <div style={{ borderRadius: '20px', backgroundColor: '#EFEFEF', padding: '24px' }}>
      <h3>One-Time Meeting </h3>
      <Form>
        <Form.Group>
          <Form.Label className="font-weight-bold">Meeting Title</Form.Label>
          <Form.Control placeholder="Meeting Title" />
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Form.Label className="font-weight-bold mt-1">Start</Form.Label>
            <Col>
              <Form.Control controlId="startTime" as="select">
                {START_OPTIONS}
              </Form.Control>
            </Col>
            <Form.Label className="font-weight-bold mt-1">End</Form.Label>
            <Col>
              <Form.Control controlId="endTime" as="select">
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
                editableDateInputs
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </Col>
          </Form.Group>
        </Form.Row>
        <Button className="primary" type="submit">Create Event</Button>
      </Form>
    </div>
  );
};
