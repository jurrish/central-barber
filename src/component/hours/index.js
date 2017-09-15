import React from 'react';

import './_hours.scss';

class Hours extends React.Component {
  render() {
    return(
      <div className='hours-div'>
        <p><i className='fa fa-clock-o 4x'></i>Hours</p>
        <ul>
          <li>Tuesday-Friday : 10am-7pm</li>
          <li>Saturday : 8am-4pm</li>
          <li>Sunday/Monday : CLOSED </li>
        </ul>
        <div className='address-div'>
          <p><i className='fa fa-map-marker'></i>Address</p>
          <ul>
            <li> 308 22nd Ave S. </li>
            <li> Suite 102 </li>
            <li> Seattle, WA </li>
          </ul>
        </div>
        <p>Walk-ins welcome, appointments preferred!</p>
      </div>
    )
  }
}

export default Hours;
