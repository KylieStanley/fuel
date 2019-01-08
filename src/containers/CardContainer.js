import React from 'react'
import Card from './Card'
import '../styles/main.scss';
import { connect } from 'react-redux'


export const CardContainer = (props) => {
	let recipes = props.recipes

	if (props.itemType === 'favorites') {
		recipes = props.favorites
	}

	let error = !recipes.length && recipes === props.favorites ? <h2>You have no favorites!</h2> : null

	return (
		<div className="card-container">
			{ props.isLoading ? <img src="../loading.gif"/> : recipes.map(recipe => <Card recipe={recipe}/>) }
			{ error }
		</div>
	)
}

export const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	recipes: state.recipes,
	favorites: state.favorites
})

export default connect(mapStateToProps)(CardContainer)
