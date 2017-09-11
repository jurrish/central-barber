import React from 'react';
import Navbar from '../navbar/index.js';

import './_about-container.scss';

class AboutContainer extends React.Component {
  render () {
    return (
      <div className='about-parent-div'>
       <div className='pushdown-show' id='about'></div>
       <div className='about-container'>
          <p> We at Central Barber aspire to give high quality cuts at reasonable prices, while encouraging a sense of community. We do outreach and work with different organizations and Non-Profits within the Central District area, because we believe in giving back whenever possible. Stop on by the shop and have a chat with us, or come to one of our community barbeques and drop a line.</p>
        </div>
      </div>
    )
  }
}

export default AboutContainer;
