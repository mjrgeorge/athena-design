import React from 'react';
import './Navbar.css';
import logo from '../../../assets/icon/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light '>
<div className="container px-0">

      <a  className='navbar-brand' href='#'>
        <img src={logo} alt='athena-design-logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <ul className='navbar-nav  justify-content-between nav-link ml-auto align-items-center'>
          {/* Home Navigation Click redirect to home */}
          <li className='nav-item'>
            <a href='#' className='nav-link  active mr-3'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mr-3' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a to='#' className='nav-link mr-3' href='#services'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link mr-3' href='#pricing'>
              Pricing
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link mr-3' href='#team'>
              Our Team
            </a>
          </li>
          <li className='nav-item'>
            <a className='btn btn-brand px-4 py-2 text-white' href='#contact' >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
