import React, { Component } from 'react'
import Header from '../Header/Header.js';
import {NavLink} from 'react-router-dom';
import './page404.css';

class Page404 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='l-container--md d--flex flex--column text--center text--primary'>
          <div className='error-container__content'>
            <p className='error-container__folio'>404</p>
            <p className='error-container__msg'>Oups! La page que vous demandez n'existe pas.</p>
          </div>
            <NavLink className='error-container__link text--primary' to='/'>Retourner sur la page d’accueil</NavLink>
        </div>
      </div>
    )
  }
}

export default Page404
