import React, { Component } from 'react'
import LodgingCard from '../LodgingCard/LodgingCard.js';
import './lodgingcards.css';
import LodgingDatas from '../../data.json';

class LodgingCards extends Component {
  render() {
    return (
      <div className='l-container--md'>
        <div className='grid-container'>
          <div className='row'>
            {
              LodgingDatas.map((lodging) => {
                return (
                  <LodgingCard key={lodging.id} id={lodging.id} title={lodging.title} coverpicture = {lodging.cover} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default LodgingCards;
