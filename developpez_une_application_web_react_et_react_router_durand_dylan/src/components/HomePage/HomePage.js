import React, { Component } from 'react'
import Header from './Header/Header.js';
import Footer from '../Footer/Footer.js';
import Banner from '../Banner/Banner.js';
import LodgingCards from '../LodgingCards/LodgingCards.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <LodgingCards />
        <Footer />
      </div>
    )
  }
}

export default HomePage;