import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const ListContainer = (props) => {
	const ingredientsList = props.ingredients.map(ingredient => <li className="item">{ingredient}</li>)

	return (
		<div className="card-container shopping">
			<ul className="shopping-list">
				{ingredientsList}
			</ul>
		</div>
	)
}

export const mapStateToProps = (state) => ({
	ingredients: state.ingredients
})

ListContainer.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.string)
}

export default connect(mapStateToProps)(ListContainer)
