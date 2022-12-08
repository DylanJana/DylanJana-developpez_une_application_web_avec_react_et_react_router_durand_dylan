import React, { Component } from 'react'
import LodgingCard from '../LodgingCard/LodgingCard.js';
import './lodgingcards.css';
import LodgingDatas from '../../data.json';

class LodgingCards extends Component {
  render() {
    return (
      <div>
        <div className='container p-5 my-3 cards'>
          <div className='row gx-5'>
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
