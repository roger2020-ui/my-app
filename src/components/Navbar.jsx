import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/navbar.css'
import img from '../img/dost.png'
import { Button } from 'react-bootstrap'
import Login from '../modals/LoginModal'
const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light' id='navBar'>
        <img src={img} alt='' srcset='' />
        <div className='container-fluid '>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item '>
                <a class='nav-link active' aria-current='page' href='#./'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#./'>
                  Dashboard
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#./'>
                  Files
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#./'>
                  Contact Us
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#./'>
                  About Us
                </a>
              </li>
            </ul>
            <div class='wrapper'>
              {/* LOGIN MODAL BUTTON */}
              <Button
                variant='primary'
                data-bs-target='#staticBackdrop'
                onClick={handleShow}
              >
                Login
              </Button>
              <Login showModal={showModal} handleClose={handleClose} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
