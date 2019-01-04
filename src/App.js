import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Splash from './Splash'
import Main from './Main'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Splash } />
        <Route exact path='/main' component={ Main } />
      </div>
    );
  }
}


export default App;
