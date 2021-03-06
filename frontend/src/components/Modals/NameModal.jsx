/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './NameModal.css';

export default (props) => {
  console.log('Rendering NameModal');

  const [state, setState] = React.useState({
    name: '',
    showModal: true,
    error: false,
  });

  const onChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const closeModal = (event) => {
    event.preventDefault();
    if (state.name.trim()) {
      props.setName(state.name.trim());
      setState({ ...state, showModal: false });
    } else {
      setState({ ...state, error: true });
    }
  };

  return (

    <Modal show={state.showModal} id="modalcont">

      <Modal.Body>

        <Modal.Title className="text-center">Meeting Title</Modal.Title>

        <Form onSubmit={closeModal}>
          <Form.Group>
            <Form.Label><h5>What&apos;s your name?</h5></Form.Label>
            <Form.Control placeholder="Name" onChange={onChange} value={state.name} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!state.name} size="sm">
            Continue
          </Button>
        </Form>

        { state.error ? <Alert variant="warning" id="invalid-input">Invalid input</Alert> : null }

      </Modal.Body>

    </Modal>

  );
};
