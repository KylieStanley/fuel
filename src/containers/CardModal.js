import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addIngredients } from '../actions'
import '../styles/main.scss'

export const CardModal = (props) => {
	const { recipe } = props
	const ingredientList = recipe.ingredients.map(ingredient => <li key={ingredient}>{ ingredient }</li>)

	return (
		<div className="expanded-card">
			<h2 className="expanded-title">{props.recipe.name}</h2>
			<div className="expanded-info">
				<h3>Serves: {recipe.yield}</h3>
				<h3>Calories per Serving: {recipe.calories}</h3>
				<h3>Source: {recipe.source}</h3>
			</div>
			<div className="ingredients">
				<h2 className="ingredients-title">Ingredients</h2>
				<ul>
					{ ingredientList }
				</ul>
			</div>
			<div className="link">
				<button className="add-btn" type="button" onClick={props.addIngredients.bind(null, props.recipe.ingredients)}>Add Ingredients to shopping List +</button>
				<a
					href={recipe.url}
					target="_blank"
					rel="noopener noreferrer"
				>Go To Full Recipe
					<i className="fas fa-angle-double-right" />
				</a>
			</div>
		</div>
	)
}

CardModal.propTypes = {
	recipe: PropTypes.shape({
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

export const mapDispatchToProps = (dispatch) => ({
	addIngredients: (ingredients) => dispatch(addIngredients(ingredients))
})

export default connect(null, mapDispatchToProps)(CardModal)
