/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
} from 'react-bootstrap';

export default (props) => {
  console.log(`Rendering Availability with props: ${props}`);

  const {
    title, subtitle, component, btn,
  } = props;

  return (
    <div className="ui-container">
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      {component}
      {btn ? <Button variant="primary">Confirm</Button> : ''}
    </div>
  );
};
