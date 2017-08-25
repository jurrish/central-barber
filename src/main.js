//npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, BrowserRouter, Route, Link} from 'react-router-dom';

//app modules
import Header from './component/header/index.js';
import AboutContainer from './component/about-container/index.js';
import Hours from './component/hours/index.js';
import HeroCarousel from './component/hero-carousel/index.js';
import Footer from './component/footer/index.js';
import Navbar from './component/navbar/index.js';
import RonnelView from './component/ronnel/index.js';
import TroyView from './component/troy/index.js';
import Location from './component/location/index.js';

import '../src/_main.scss';


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate () {
    console.log( ':::::: state ::::::', this.state );
  }

//whenever getState actually uses App component's context
//we pass our App state down to children components, and they can update PARENT(app) STATE with this function! the children can update APP state by calling
//this.props.app.setState to update APP state.
  getApp () {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render () {
    return (
      <main className='main-div'>
        <Header />
        <Navbar />
        <AboutContainer />
        <Hours />
        <RonnelView />
        <TroyView />
        <HeroCarousel />
        <Location />
        <Footer />
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
