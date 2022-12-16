import React, { Component } from 'react'
import './banner.css';


class Banner extends Component {
  render() {
    return (
      <div className='l-container--md'>
        <div className='home__banner'>
          <h1 className='title--xl text--white home__banner-txt'>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
    )
  }
}
export default Banner;
