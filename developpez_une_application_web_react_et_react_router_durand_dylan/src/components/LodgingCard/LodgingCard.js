import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './lodgingcard.css';

class LodgingCard extends Component {
  render() {
    return (
      <div className='col-12 col-md-6 col-lg-4 my-2 mb-5 card'>
        <NavLink to={'/lodging/'+this.props.id}>
        <div className='card-body' style={{ backgroundImage: "url(" + this.props.coverpicture + ")", backgroundSize:'cover', backgroundPosition:'center' }}>
            <span className='card-text'>{this.props.title}</span>
        </div>
        </NavLink>
        
      </div>
    )
  }
}


export default LodgingCard;

