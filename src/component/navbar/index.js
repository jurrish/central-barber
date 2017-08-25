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
          <a href='#about'>About Us</a>
          <a href='#footer'>Make an Appointment</a>
          <a href='#ronnel'>Ronnel</a>
          <a href='#troy'>Troy</a>
          <a href='#location'>Location</a>
        </ul>
      </div>
    )
  }
}

export default Navbar;
