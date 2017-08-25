import React from 'react';

import './_footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer-div' id='footer'>
        <p> Check out our Yelp reviews and give us a call! </p>
        <a href='https://www.yelp.com/biz/central-barber-seattle' target='_blank'>Reviews</a>
        <a href="tel:206-471-6190">(206) 471-6190</a>
      </div>
    )
  }
}

export default Footer;
