import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

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
              <Form.Control controlId="startTime" as="select" placeholder="9:00 am">
                <option value=""> </option>
                <option value="12:00am"> 12:00am </option>
                <option value="12:30am"> 12:30am </option>
                <option value="1:00am"> 1:00am </option>
                <option value="1:30am"> 1:30am </option>
                <option value="2:00am"> 2:00am </option>
                <option value="2:30am"> 2:30am </option>
                <option value="3:00am"> 3:00am </option>
                <option value="3:30am"> 3:30am </option>
                <option value="4:00am"> 4:00am </option>
                <option value="4:30am"> 4:30am </option>
                <option value="5:00am"> 5:00am </option>
                <option value="5:30am"> 5:30am </option>
                <option value="6:00am"> 6:00am </option>
                <option value="6:30am"> 6:30am </option>
                <option value="7:00am"> 7:00am </option>
                <option value="7:30am"> 7:30am </option>
                <option value="8:00am"> 8:00am </option>
                <option value="8:30am"> 8:30am </option>
                <option value="9:00am"> 9:00am </option>
                <option value="9:30am"> 9:30am </option>
                <option value="10:00am"> 10:00am </option>
                <option value="10:30am"> 10:30am </option>
                <option value="11:00am"> 11:00am </option>
                <option value="11:30am"> 11:30am </option>
                <option value="12:00pm"> 12:00pm </option>
                <option value="12:30pm"> 12:30pm </option>
                <option value="1:00pm"> 1:00pm </option>
                <option value="1:30pm"> 1:30pm </option>
                <option value="2:00pm"> 2:00pm </option>
                <option value="2:30pm"> 2:30pm </option>
                <option value="3:00pm"> 3:00pm </option>
                <option value="3:30pm"> 3:30pm </option>
                <option value="4:00pm"> 4:00pm </option>
                <option value="4:30pm"> 4:30pm </option>
                <option value="5:00pm"> 5:00pm </option>
                <option value="5:30pm"> 5:30pm </option>
                <option value="6:00pm"> 6:00pm </option>
                <option value="6:30pm"> 6:30pm </option>
                <option value="7:00pm"> 7:00pm </option>
                <option value="7:30pm"> 7:30pm </option>
                <option value="8:00pm"> 8:00pm </option>
                <option value="8:30pm"> 8:30pm </option>
                <option value="9:00pm"> 9:00pm </option>
                <option value="9:30pm"> 9:30pm </option>
                <option value="10:00pm"> 10:00pm </option>
                <option value="10:30pm"> 10:30pm </option>
                <option value="11:00pm"> 11:00pm </option>
                <option value="11:30pm"> 11:30pm </option>
              </Form.Control>
            </Col>
            <Form.Label className="font-weight-bold mt-1">End</Form.Label>
            <Col>
              <Form.Control controlId="endTime" as="select" placeholder="5:00 pm">
                <option value=""> </option>
                <option value="12:00am"> 12:00am </option>
                <option value="12:30am"> 12:30am </option>
                <option value="1:00am"> 1:00am </option>
                <option value="1:30am"> 1:30am </option>
                <option value="2:00am"> 2:00am </option>
                <option value="2:30am"> 2:30am </option>
                <option value="3:00am"> 3:00am </option>
                <option value="3:30am"> 3:30am </option>
                <option value="4:00am"> 4:00am </option>
                <option value="4:30am"> 4:30am </option>
                <option value="5:00am"> 5:00am </option>
                <option value="5:30am"> 5:30am </option>
                <option value="6:00am"> 6:00am </option>
                <option value="6:30am"> 6:30am </option>
                <option value="7:00am"> 7:00am </option>
                <option value="7:30am"> 7:30am </option>
                <option value="8:00am"> 8:00am </option>
                <option value="8:30am"> 8:30am </option>
                <option value="9:00am"> 9:00am </option>
                <option value="9:30am"> 9:30am </option>
                <option value="10:00am"> 10:00am </option>
                <option value="10:30am"> 10:30am </option>
                <option value="11:00am"> 11:00am </option>
                <option value="11:30am"> 11:30am </option>
                <option value="12:00pm"> 12:00pm </option>
                <option value="12:30pm"> 12:30pm </option>
                <option value="1:00pm"> 1:00pm </option>
                <option value="1:30pm"> 1:30pm </option>
                <option value="2:00pm"> 2:00pm </option>
                <option value="2:30pm"> 2:30pm </option>
                <option value="3:00pm"> 3:00pm </option>
                <option value="3:30pm"> 3:30pm </option>
                <option value="4:00pm"> 4:00pm </option>
                <option value="4:30pm"> 4:30pm </option>
                <option value="5:00pm"> 5:00pm </option>
                <option value="5:30pm"> 5:30pm </option>
                <option value="6:00pm"> 6:00pm </option>
                <option value="6:30pm"> 6:30pm </option>
                <option value="7:00pm"> 7:00pm </option>
                <option value="7:30pm"> 7:30pm </option>
                <option value="8:00pm"> 8:00pm </option>
                <option value="8:30pm"> 8:30pm </option>
                <option value="9:00pm"> 9:00pm </option>
                <option value="9:30pm"> 9:30pm </option>
                <option value="10:00pm"> 10:00pm </option>
                <option value="10:30pm"> 10:30pm </option>
                <option value="11:00pm"> 11:00pm </option>
                <option value="11:30pm"> 11:30pm </option>
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
