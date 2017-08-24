import React from 'react';

import './_footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <div className='footer-div' id='footer'>
        <p> Give us a call! </p>
        <a href="tel:206-471-6190">(206) 471-6190</a>
      </div>
    )
  }
}

export default Footer;
