import React from 'react';
//
// import img from '../../../resources/carousel-pics/centralbarber/logo.jpg'

import './_hero-carousel.scss';

class HeroCarousel extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      currentPhoto: null,
    }
  }

    componentDidMount() {
      console.log(':::::::hero-state::::', this.state);
    }

  render(){
    return(
      <div className='hero-carousel-div'>
        <p> brap </p>
        <img src={ require("./carousel-1.jpg") } />
      </div>
    )
  }
}


export default HeroCarousel;
