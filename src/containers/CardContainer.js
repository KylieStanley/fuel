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
			{ error }
			{ recipes.map(recipe => <Card recipe={recipe}/>) }
		</div>
	)
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes,
	favorites: state.favorites
})

export default connect(mapStateToProps)(CardContainer)
