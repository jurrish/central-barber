import React from 'react';

import './_footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer-div' id='footer'>
        <p> Check out our Yelp reviews and give us a call! </p>

        <i className='fa fa-yelp 2x'></i>
        <a href='https://www.yelp.com/biz/central-barber-seattle' target='_blank'>Reviews</a>
        <i className='fa fa-phone 2x'><a href="tel:206-471-6190">(206) 471-6190</a></i>
      </div>
    )
  }
}

export default Footer;
