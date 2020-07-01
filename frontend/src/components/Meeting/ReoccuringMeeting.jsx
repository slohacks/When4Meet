/* eslint-disable */
import React, { useState } from 'react';
import { Button, Container, Col, Form} from 'react-bootstrap';
import './ReoccuringMeeting.css';

export default (props) => {
  console.log('Rendering ReoccuringMeeting');

  // const [Mon, setMon]  = useState(false);
  // const [Tue, setTue]  = useState(false);
  // const [Wed, setWed]  = useState(false);
  // const [Thu, setThu]  = useState(false);
  // const [Fri, setFri]  = useState(false);
  // const [Sat, setSat]  = useState(false);
  // const [Sun, setSun]  = useState(false);

  return (
    <Container id="ui-container" fluid>
      <h1>Reoccuring Meeting</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label id="meeting-title-header">Meeting Title</Form.Label>
            <Form.Control type="meeting-title" placeholder="Meeting Title"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} id="time-input">
            <Form.Label>Start</Form.Label>
            <input type="time" value="09:00"/>
          </Form.Group>
          <Form.Group as={Col} id="time-input">
            <Form.Label>End</Form.Label>
            <input type="time" value="17:00"/>
          </Form.Group>
        </Form.Row>
        <h4>Select the days available for your meeting</h4>
        <Form.Row>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Mon</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Tue</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Wed</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Thur</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Fri</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Sat</Form.Label>
          </Form.Group>
          <Form.Group as={Col} id="select-day">
            <Button variant="primary"/>
            <Form.Label id="day-of-week">Sun</Form.Label>
          </Form.Group>
        </Form.Row>
      </Form>
      <Button variant="primary">Create Event</Button>
    </Container>
  );
};
