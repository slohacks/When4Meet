/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button, Container,
} from 'react-bootstrap';
import './Availability.css';

export default (props) => {
  console.log(`Rendering Availability with props: ${props}`);
  const {
    title, subtitle, component, btn,
  } = props;

  return (
    <Container id="ui-container" fluid>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      {component}
      {btn ? <Button variant="primary">Confirm</Button> : ''}
    </Container>
  );
};
