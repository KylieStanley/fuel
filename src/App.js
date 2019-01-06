import React, { Component } from 'react';
import './styles/main.scss';
import { Route } from 'react-router-dom'
import Splash from './Splash'
import Home from './Home'
import Main from './containers/Main'


class App extends Component {

  render() {
    return (
    <div className="splash">
      <div className="overlay"></div>
      <div className="splash-green"></div>
        <Route exact path='/' component={ Splash } />
        <Route exact path='/main' component={ Main } />
        <Route exact path='/home' component={ Home } />
      </div>
    );
  }
}

export default App;
