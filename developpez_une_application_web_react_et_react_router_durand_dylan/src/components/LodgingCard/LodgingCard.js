import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './lodgingcard.css';
import '../../App.css';

class LodgingCard extends Component {
  render() {
    return (
      <div className='column col-12 col-md-6 col-lg-4'>
        <div className='grid-item'>
          <NavLink to={'/lodging/'+this.props.id}>
            <div className='grid-item__body br--sm' style={{ backgroundImage: "url(" + this.props.coverpicture + ")"}}>
              <div className='grid-item--gradient d--flex align-items--end br--sm'>
                <p className='text--white w--100'>{this.props.title}</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}


export default LodgingCard;

