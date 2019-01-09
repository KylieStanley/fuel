import React from 'react'
import '../styles/main.scss'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from './Card'


export const CardContainer = (props) => {
	const { recipes, favorites, isLoading } = props
	let selectedRecipes = recipes

	if (props.itemType === 'favorites') {
		selectedRecipes = favorites
	}

	const error = !selectedRecipes.length && selectedRecipes === favorites ? <h2>You have no favorites!</h2> : null

	return (
		<div className="card-container">
			{ isLoading ? <img src="../loading.gif" alt="spinning circle" /> : selectedRecipes.map(recipe => <Card key={recipe.url} recipe={recipe} />) }
			{ error }
		</div>
	)
}

export const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	recipes: state.recipes,
	favorites: state.favorites
})

CardContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	favorites: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapStateToProps)(CardContainer)
