import React from 'react';

const img1 = require('../../resources/carousel-pics/centralbarber/img1.jpg');
const img2 = require('../../resources/carousel-pics/centralbarber/img2.jpg');
const img3 = require('../../resources/carousel-pics/centralbarber/img3.jpg');

import './_hero-carousel.scss';

class HeroCarousel extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      imageIndex: 0,
      imagesArray: undefined,
    }
    // this.loadImages = this.loadImages.bind(this);
    // this.nextImage = this.nextImage.bind(this);
    // this.prevImage = this.prevImage.bind(this);
  }

  componentWillMount() {
    this.loadImages();
    // this.nextImage();
  };

  componentDidMount() {
    console.log(':::::::hero-state::::', this.state);
  }

  nextImage() {
    let currentIndex = this.state.imageIndex;
    currentIndex++;
    console.log('currentIndex ====> ', currentIndex)
    return this.setState({ imageIndex: currentIndex })
  }

  loadImages() {
    let newImagesArray = [];
    newImagesArray.push(img1, img2, img3);
    return this.setState({ imagesArray: newImagesArray });
  }

  render(){
    // { this.loadImages() }
    return(
      <div className='hero-carousel-div'>
        <button onClick={ this.nextImage.bind(this) }> load images first, then the rendered images in a carousel below </button>
        <img src={ this.state.imagesArray[this.state.imageIndex] } />
      </div>
    )
  }
}


export default HeroCarousel;
