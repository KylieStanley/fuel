import React, { Component } from 'react'
import './styles/main.scss';


export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			search: ''
		}
	}

	handleSearch = (e) => {
		this.setState({ search: e.target.value })
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Search for Recipes" value={this.state.search} onChange={this.handleSearch} />
			<button className="search-btn"><i className="fas fa-search"></i></button>
		</form>
		)
	}
}