// /* eslint-disable */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './NameModal.css'


export default (props) => {
  console.log('Rendering NameModal');

  const [state, setState] = React.useState({
    showModal: true
  });

  return (

      <Modal show={state.showModal} id= "modalcont">
        <div className="modal-background-color">

          <Modal.Body>
            
            <Modal.Title className="margins text-center">Meeting Title</Modal.Title>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label><h5>What's your name?</h5></Form.Label>
                  <Form.Control type="name" placeholder="Name" />
                </Form.Group>
              </Form>

              <Button variant="primary" size="sm" onClick={() => setState({showModal: false})}>
                Continue
              </Button>
            
          </Modal.Body>

        </div>
      </Modal>
    

  );
};
