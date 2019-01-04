import React, { Component } from 'react';
import './styles/main.scss';
import { Route, NavLink } from 'react-router-dom'
import Splash from './Splash'
import Home from './Home'
import MainContainer from './containers/MainContainer'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
    <div className="splash">
      <div className="overlay"></div>
      <div className="splash-green"></div>
        <Route exact path='/' component={ Splash } />
        <Route exact path='/main' component={ MainContainer } />
        <Route exact path='/home' component={ Home } />
      </div>
    );
  }
}


export default App;
