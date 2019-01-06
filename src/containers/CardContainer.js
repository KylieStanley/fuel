import React from 'react'
import Card from './Card'
import '../styles/main.scss';
import { connect } from 'react-redux'


export const CardContainer = (props) => {
	let recipes = props.recipes

	if (props.itemType === 'favorites') {
		recipes = props.favorites
	}

	return (
		<div className="card-container">
			{
				recipes.map(recipe => {
					return <Card recipe={recipe}/>
				})
			}
		</div>
	)
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes,
	favorites: state.favorites
})

export default connect(mapStateToProps)(CardContainer)
