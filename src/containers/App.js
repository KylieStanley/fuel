import React from 'react'
import '../styles/main.scss'
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ModalContainer, ModalRoute } from 'react-router-modal'
import Splash from '../components/Splash'
import List from '../components/List'
import ErrorPage from '../components/ErrorPage'
import CardModal from './CardModal'
import Main from './Main'
import 'react-router-modal/css/react-router-modal.css'


export const App = (props) => {
	return (
		<div className="splash">
			<Switch>
				<Route exact path="/" component={Splash} />
				<Route path="/main" component={Main} />
				<Route path="/favorites" render={() => <List itemType="favorites" />} />
				<Route path="/shopping" render={() => <List itemType="shopping" />} />
				<Route component={ErrorPage} />
			</Switch>
			<ModalRoute component={CardModal} path="*/modal" parentPath={`${props.history.goBack}`} props={{ recipe: props.selectedCard }} />
			<ModalContainer />
		</div>
	)
}

export const mapStateToProps = (state) => ({
	selectedCard: state.selectedCard
})


App.propTypes = {
	selectedCard: PropTypes.shape({
		name: PropTypes.string,
		yield: PropTypes.number,
		calories: PropTypes.number,
		dietLabel: PropTypes.array,
		url: PropTypes.string,
		image: PropTypes.string,
		source: PropTypes.string,
		ingredients: PropTypes.array
	}).isRequired
}

export default withRouter(connect(mapStateToProps)(App))
