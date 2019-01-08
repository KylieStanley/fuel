import React, { Component } from 'react'
import '../styles/main.scss';
import { connect } from 'react-redux'
import { cleanSearchString } from '../helper'
import { apiId, apiKey } from '../apiKey'
import { fetchRecipes } from '../thunks/fetchRecipes'


export class Form extends Component {
	constructor() {
		super()
		this.state = {
			search: '',
			filter: ''
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ 
			[name]: value 
		}, () => {
			if (name === 'filter') {
				this.handleSubmit(e)
			}
		})	
	}

	handleSubmit = (e) => {
		const { search, filter } = this.state
		const dietType = `&diet=${filter}` || null
		e.preventDefault()
		if (search) {
			const searchString = cleanSearchString(search)
			const url = `https://api.edamam.com/search?q=${searchString}&app_id=${apiId}&app_key=${apiKey}&from=0&to=30${dietType}`
			this.props.fetchRecipes(url)
		}
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}>
		<div>
			<input type="text" name="search" placeholder="Search for Recipes" value={this.state.search} onChange={this.handleChange} />
			<button className="search-btn"><i className="fas fa-search"></i></button>
			</div>
			<div class="styled-select white">
			<select name="filter" onChange={this.handleChange}>  
				<option value="">Filter by Diet</option>
				<option value="high-carb">High Carb</option>
				<option value="balanced">Balanced</option>
				<option value="low-carb">Low Carb</option>
				<option value="high-protein">High Protein</option>
				<option value="high-fiber">High Fiber</option>
			</select>
			</div>
		</form>
		)
	}
}

export const mapDispatchToProps = (dispatch) => ({
	fetchRecipes: (url) => dispatch(fetchRecipes(url))
})


export default connect(null, mapDispatchToProps)(Form)