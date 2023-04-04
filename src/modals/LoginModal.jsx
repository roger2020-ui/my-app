import React from 'react'
import { Button, Modal } from 'react-bootstrap'

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
      <Modal.Body>Login.</Modal.Body>
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
