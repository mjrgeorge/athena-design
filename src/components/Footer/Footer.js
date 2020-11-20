import React from 'react';
import facebook from '../../assets/icon/facebook.png';
import twitter from '../../assets/icon/twitter.png';
import linkedin from '../../assets/icon/linkedin.png';
import dribble from '../../assets/icon/dribble.png';
import logo from '../../assets/icon/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div class='footer-container'>
      <footer>
        <div class='container'>
          <div class='row d-flex align-items-center'>
            <div className='col-md-6 mb-5'>
              <div class='d-flex flex-column justify-content-center social-logo'>
                <img className='w-25' src={logo} alt='athena-design-logo' />
                <div>
                  <img
                    src={facebook}
                    style={{ height: '29px', width: '29px' }}
                    className='p-1 mr-2'
                    alt=''
                  />
                  <img
                    src={twitter}
                    style={{ height: '29px', width: '29px' }}
                    className='p-1 mr-2'
                    alt=''
                  />
                  <img
                    src={linkedin}
                    style={{ height: '29px', width: '29px' }}
                    className='p-1 mr-2'
                    alt=''
                  />
                  <img
                    src={dribble}
                    style={{ height: '29px', width: '29px' }}
                    className='p-1 mr-2'
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='row'>
                <div class='col-sm-6 col-md-3 item'>
                  <ul>
                    <li>
                      <a href='#'>Features</a>
                    </li>
                    <li>
                      <a href='#'>Enterprise </a>
                    </li>
                    <li>
                      <a href='#'>Pricing</a>
                    </li>
                  </ul>
                </div>
                <div class='col-sm-6 col-md-3 item'>
                  <ul>
                    <li>
                      <a href='#'>Blog</a>
                    </li>
                    <li>
                      <a href='#'>Help Center</a>
                    </li>
                    <li>
                      <a href='#'>Contact Us</a>
                    </li>
                    <li>
                      {' '}
                      <a href='#'>Status </a>{' '}
                    </li>
                  </ul>
                </div>

                <div class='col-sm-6 col-md-3 item'>
                  <ul>
                    <li>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>Terms of Service</a>
                    </li>
                    <li>
                      <a href='#'>Security</a>
                    </li>
                    <li>
                      {' '}
                      <a href='#'>Login</a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
