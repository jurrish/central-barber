import React from 'react';
import { Link } from 'react-router-dom';

import './_nav-bar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar-div'>
        <p> navbar component </p>
        <ul>
          <li> About Us </li>
          <li> Book an Appointment </li>
          <li> GPS US </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
