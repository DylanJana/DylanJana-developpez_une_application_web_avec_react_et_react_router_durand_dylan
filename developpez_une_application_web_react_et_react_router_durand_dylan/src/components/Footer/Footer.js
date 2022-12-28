import React, { Component } from 'react'
import whiteLogo from '../../svg/logo-white.svg';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='t--dark d--flex justify--center align-items--center mt--md'>
        <div className='text--center'>
          <img src={whiteLogo} alt='Logo de kasa blanc'  className='mb--md'/>
          <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
