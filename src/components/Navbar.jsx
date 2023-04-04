import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
