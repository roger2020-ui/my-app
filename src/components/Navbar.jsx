import React, { useState } from 'react'
import '../styles/navbar.css'
import img from '../img/dost.png'
import { Container,Nav,Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark' >
        <Container >
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
