import React from 'react';

import './_header.scss';

class Header extends React.Component {
  render(){
    return(
      <div className='header-div'>
        <img src={ require('./logo.jpg') } alt='Central Barber' />
      </div>
    )
  }
}

export default Header;
