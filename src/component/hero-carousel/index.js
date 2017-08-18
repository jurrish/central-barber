import React from 'react';

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
        <p> some photo content </p>
      </div>
    )
  }
}


export default HeroCarousel;
