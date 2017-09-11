import React from 'react';

import './_ronnel.scss';

class RonnelView extends React.Component {
  render(){
    return(
      <div className='ronnel-container'>
        <div className='pushdown-show' id='ronnel'></div>
        <div className='ronnel-view'>
          <h2> Ronnel Getz </h2>
          <p> info on ronnel goes here </p>
          <p> insert imagetag of Ronnel here </p>
        </div>
      </div>
    )
  }
}

export default RonnelView;
