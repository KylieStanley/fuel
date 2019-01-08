import React from 'react';
import '../styles/main.scss';
import { Route, withRouter, Switch } from 'react-router-dom'
import Splash from '../components/Splash'
import List from '../components/List'
import ErrorPage from '../components/ErrorPage'
import { CardModal } from '../components/CardModal'
import Main from './Main'
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { connect } from 'react-redux'
import 'react-router-modal/css/react-router-modal.css'


export const App = (props) => {
  return (
    <div className="splash">
      <div className="overlay" />
      <div className="splash-green" />
      <Switch>
        <Route exact path='/' component={ Splash } />
        <Route path='/main' component={ Main } />
        <Route path="/favorites" render={() => <List itemType="favorites" />} />
        <Route path="/shopping" render={() => <List itemType="shopping" />} />
        <Route component={ ErrorPage } />
      </Switch>
      <ModalRoute component={ CardModal } path='*/modal' parentPath={`${props.history.goBack}`} props={{ recipe: props.selectedCard }} />
      <ModalContainer />
    </div>
  );
}

export const mapStateToProps = (state) => ({
  selectedCard: state.selectedCard
})

export default withRouter(connect(mapStateToProps)(App));

