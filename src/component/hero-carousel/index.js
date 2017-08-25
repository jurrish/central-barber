import React from 'react';

const img1 = require('../../resources/carousel-pics/centralbarber/img1.jpg');
const img2 = require('../../resources/carousel-pics/centralbarber/img2.jpg');
const img3 = require('../../resources/carousel-pics/centralbarber/img3.jpg');
const img4 = require('../../resources/carousel-pics/centralbarber/img4.jpg');
const img5 = require('../../resources/carousel-pics/centralbarber/img5.jpg');
const img6 = require('../../resources/carousel-pics/centralbarber/img6.jpg');
const img7 = require('../../resources/carousel-pics/centralbarber/img7.jpg');
const img8 = require('../../resources/carousel-pics/centralbarber/img8.jpg');
const img9 = require('../../resources/carousel-pics/centralbarber/img9.jpg');
const img10 = require('../../resources/carousel-pics/centralbarber/img10.jpg');
const img11 = require('../../resources/carousel-pics/centralbarber/img11.jpg');

import './_hero-carousel.scss';

class HeroCarousel extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      imageIndex: 4,
      imagesArray: undefined,
    }
    this.loadImages = this.loadImages.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
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
    if (currentIndex === this.state.imagesArray.length - 1){
      return this.setState({ imageIndex: 0 })
    }
    console.log('currentIndex ====> ', currentIndex)
    console.log('state :::: ', this.state);
    return this.setState({ imageIndex: currentIndex })
  }

  prevImage(){
    let currentIndex = this.state.imageIndex;
    currentIndex--;

    // const imageIndex = this.state.currentImageIndex === 0 ? this.props.images.length - 1 : this.state.currentImageIndex - 1;
    //
    //     this.setState({
    //       currentImageIndex: imageIndex
    //     })
    if(currentIndex === 0)
      return this.setState({ imageIndex: this.state.imagesArray.length - 1 })

    console.log('decrement index ===> ', currentIndex);
    console.log('state::: ', this.state)
    return this.setState({ imageIndex: currentIndex })
  }

  loadImages() {
    let newImagesArray = [];
    newImagesArray.push(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11);
    return this.setState({ imagesArray: newImagesArray });
  }

  render(){
    // { this.loadImages() }
    return(
      <div className='hero-carousel-div'>
        <div className='button-holder-div'>
          <div className='right-button' onClick={ this.nextImage.bind(this) }>
            <i className='fa fa-angle-right fa-2x' />
          </div>
          <div className='left-button' onClick={ this.prevImage.bind(this) }>
            <i className='fa fa-angle-left fa-2x' />
          </div>
        </div>
        <div className='hero-image-container'>
          <img src={ this.state.imagesArray[this.state.imageIndex] } />
        </div>
      </div>
    )
  }
}


export default HeroCarousel;
