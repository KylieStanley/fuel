import React, { Component } from 'react';
import '../styles/main.scss';
import { Route, withRouter } from 'react-router-dom'
import Splash from '../Splash'
import Home from '../Home'
import { Modal } from '../Modal'
import Main from './Main'
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { connect } from 'react-redux'
import 'react-router-modal/css/react-router-modal.css'



export const App = (props) => {
  return (
  <div className="splash">
    <div className="overlay"></div>
    <div className="splash-green"></div>
      <Route exact path='/' component={ Splash } />
      <Route path='/main' component={ Main } />
      <Route path="/favorites" render={() => <Home itemType="favorites" />} />
      <Route exact path="/shopping" render={() => <Home itemType="shopping" />} />
      <ModalRoute component={ Modal } path='*/modal' parentPath={`${props.history.goBack}`} props={{ recipe: props.selectedCard }} />
      <ModalContainer />
    </div>
  );
}

export const mapStateToProps = (state) => ({
  selectedCard: state.selectedCard
})

export default withRouter(connect(mapStateToProps)(App));

