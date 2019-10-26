import React from 'react';
import ReactDOM from 'react-dom';
import '../css/modal.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={1} role="dialog">
        <div className = "modal-text">
         <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input type="Name" name="email" id="exampleEmail" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Last Name</Label>
        <Input type="Name" name="password" id="examplePassword"  />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Email</Label>
        <Input type="Email" name="password" id="examplePassword" />
      </FormGroup>
      <Button color="success" onClick = {hide}>Submit</Button>{' '}
      </Form>

        </div>
      </div>

  </React.Fragment>, document.body
) : null;

export default Modal;