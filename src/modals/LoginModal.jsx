import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import '../styles/loginModal.css'
const LoginModal = ({ showModal, handleClose }) => {

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      className='modal-dialog modal-dialog-centered'
    >
      <Modal.Header closeButton>
        <Modal.Title>LOGIN FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label></Form.Label>
            <Form.Control type='email' placeholder='Enter email' required />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' required />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal
