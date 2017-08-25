import React from 'react';

import './_hours.scss';

class Hours extends React.Component {
  render() {
    return(
      <div className='hours-div'>
        <ul>
          <li>Tuesday-Friday: 10am-8pm</li>
          <li>Saturday: 8am-4pm</li>
          <li>Sunday/Monday: CLOSED </li>
        </ul>
        <p>Walk-ins welcome, appointments preferred!</p>
      </div>
    )
  }
}

export default Hours;
