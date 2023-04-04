import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LoginModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body text goes here.</Modal.Body>
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
