import React from 'react'
import Card from '../Card'
import '../styles/main.scss';
import { connect } from 'react-redux'
import * as actions from '../actions'


export const CardContainer = (props) => {
	return (
		<div className="card-container">
			{
				props.recipes.map(recipe => {
					return <Card recipe={recipe}/>
				})
			}
		</div>
	)
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes
})

export default connect(mapStateToProps)(CardContainer)
