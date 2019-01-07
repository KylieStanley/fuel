import React, { Component } from 'react'
import '../styles/main.scss';
import { connect } from 'react-redux'
import { cleanSearchString } from '../helper'
import { apiId, apiKey } from '../apiKey'
import { fetchRecipes } from '../thunks/fetchRecipes'


export class Search extends Component {
	constructor() {
		super()
		this.state = {
			search: ''
		}
	}

	handleChange = (e) => {
		this.setState({ search: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (this.state.search) {
			const searchString = cleanSearchString(this.state.search)
			const url = `https://api.edamam.com/search?q=${searchString}&app_id=${apiId}&app_key=${apiKey}&from=0&to=30`
			this.props.fetchRecipes(url)
		}
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Search for Recipes" value={this.state.search} onChange={this.handleChange} />
			<button className="search-btn"><i className="fas fa-search"></i></button>
		</form>
		)
	}
}

export const mapDispatchToProps = (dispatch) => ({
	fetchRecipes: (url) => dispatch(fetchRecipes(url))
})


export default connect(null, mapDispatchToProps)(Search)