// /* eslint-disable */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NameModal.css'

// 20px and a background color of #EFEFEF to match the mockups.

export default (props) => {
  console.log('Rendering NameModal');

  return (

      <Modal.Dialog>
        {/* <div className="modal-content"> */}
          <div className="modal-background-color">
        


      <Modal.Body>
        
        <Modal.Title><h4 className="text-center">Meeting Title</h4></Modal.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label><h5>What's your name?</h5></Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
          </Form>

          <Button variant="primary" size="sm">
            Continue
          </Button>{' '}
        
      </Modal.Body>

        {/* </div> */}
        </div>
      </Modal.Dialog>
    

  );
};
