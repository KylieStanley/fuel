import React, { Component } from 'react'
import Search from '../Search'
import CardContainer from '../containers/CardContainer'
import Home from '../Home'
import { Route } from 'react-router-dom'
import { fetchRecipes } from '../thunks/fetchRecipes'
import { connect } from 'react-redux'
import * as actions from '../actions'


class MainContainer extends Component {

	componentDidMount() {
		let url = `https://api.edamam.com/search?q=ma&app_id=${apiId}&app_key=${apiKey}&from=0&to=30`
		this.props.fetchRecipes(url)
	}

	render() {
		return (
			<div className="main-container">
				<div className="main-text">
					<h1 className="fuel">fuel</h1>
					<h3>Recipes and Nutrition to support your training</h3>
				</div>
				<Search />
				<CardContainer />
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes
})

export const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
