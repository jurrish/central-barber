import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../../main.js';
import AboutContainer from '../about-container/index.js';

import './_nav-bar.scss';

//integrate React-Router


class Navbar extends React.Component {
  preventRefresh (e) {
    e.preventDefault();
    console.log('bound to click');
  }
  render() {
    return (
      <div className='navbar-div'>
        <ul>
          <li><a href='#about'>About Us</a></li>
          <li><a href='#footer'>Appointments</a></li>
          <li><a href='#ronnel'>Stylists</a></li>
          <li><a href='#location'>Location</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
