import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../../main.js';
import AboutContainer from '../about-container/index.js';

import './_nav-bar.scss';

//integrate React-Router


class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFixed: false
    }
  }

  componentDidMount () {
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll () {
//scrollY @ 163 = start of div

    if(window.scrollY >= 163) {
      this.setState({ isFixed: true })
    }

    if(this.state.isFixed && window.scrollY <= 163) {
      this.setState({ isFixed: false })
    }
  }

  preventRefresh (e) {
    e.preventDefault();
    console.log('bound to click');
  }

  render() {

    let createdClass = this.state.isFixed ? ' navbar-div navbar-div-fixed' : 'navbar-div';

    return (
      <div className={ createdClass }>
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
