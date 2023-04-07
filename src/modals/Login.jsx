import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import '../styles/loginModal.css'
const Login = ({ showModal, handleClose }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      className='modal-dialog modal-dialog-centered'
    >
      <Modal.Header closeButton>
        <Modal.Title>LOGIN MODAL</Modal.Title>
      </Modal.Header>
      <Modal.Body id='modalbody'>
        <Form id='form'>
          <Form.Group id='email' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Enter email' required />
          </Form.Group>

          <Form.Group id='password' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' required />
          </Form.Group>
          <Form.Group id='btn-form'>
            <Button id='login' variant='primary' type='submit'>
              Login
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default Login
