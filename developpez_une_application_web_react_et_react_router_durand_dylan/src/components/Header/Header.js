import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../svg/logo.svg';

class Header extends Component {
  render() {
    return (
        //my-5 margin-y : Create marge horizontal
      <header className='l-container--md d--flex justify--space-between align-items--center'>
        <div>
            <NavLink to='/'>
                <img src={Logo} alt="Logo de Kasa" />
            </NavLink>
        </div>
        <nav>
            <ul className='nav__list d--flex'>
                <li className='nav__list-item'>
                  <NavLink className='nav__list-link title--md' to='/'>Accueil</NavLink>
                </li>
                <li className='nav__list-item'>
                  <NavLink className='nav__list-link title--md' to='/a-propos'>A Propos</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
