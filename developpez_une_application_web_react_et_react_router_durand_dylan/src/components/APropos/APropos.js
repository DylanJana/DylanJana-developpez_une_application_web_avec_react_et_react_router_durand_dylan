import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import AProposBanner from '../AProposBanner/AProposBanner.js';
import Accordion from '../Accordion/Accordion.js';

class APropos extends Component {
  render() {
    return (
      <div>
        <Header />
        <AProposBanner />
        <Accordion />
        <Footer />
      </div>
    )
  }
}


export default APropos;
