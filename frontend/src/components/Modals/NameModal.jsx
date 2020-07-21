/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './NameModal.css';

export default (props) => {
  console.log('Rendering NameModal');

  const [state, setState] = React.useState({
    name: '',
    showModal: true,
  });

  const onChange = (event) => {
    setState({ ...state, name: event.target.value });
  };

  const closeModal = () => {
    props.setName(state.name);
    setState({ ...state, showModal: false });
  };

  return (

    <Modal show={state.showModal} id="modalcont">

      <Modal.Body>

        <Modal.Title className="text-center">Meeting Title</Modal.Title>

        <Form>
          <Form.Group>
            <Form.Label><h5>What&apos;s your name?</h5></Form.Label>
            <Form.Control placeholder="Name" onChange={onChange} value={state.name} />
          </Form.Group>
        </Form>

        <Button variant="primary" size="sm" onClick={closeModal}>
          Continue
        </Button>

      </Modal.Body>

    </Modal>

  );
};
