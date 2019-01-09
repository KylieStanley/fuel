import React, { Component } from 'react'
import Form from './Form'
import CardContainer from '../containers/CardContainer'
import { fetchRecipes } from '../thunks/fetchRecipes'
import { connect } from 'react-redux'
import { apiId, apiKey } from '../apiKey'
import Menu from '../components/Menu'
import PropTypes from 'prop-types'


export class Main extends Component {

	componentDidMount() {
		if (this.props.recipes.length === 0) {
			let url = `https://api.edamam.com/search?q=ma&app_id=${apiId}&app_key=${apiKey}&from=0&to=30`
			this.props.fetchRecipes(url)	
		}
	}

	render() {
		return (
			<div className="main-container">
			<div className="header-menu">
				<div className="main-text">
					<h1 className="fuel">fuel</h1>
					<h3>Recipes and Nutrition to support your training</h3>
				</div>
				<Menu />
				</div>
				<Form />
				<CardContainer />
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes
})

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (url) => dispatch(fetchRecipes(url))
})

Main.propTypes = {
	recipes: PropTypes.array.isRequired,
	fetchRecipes: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
