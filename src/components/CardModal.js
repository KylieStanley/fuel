import React from 'react'
import '../styles/main.scss';

export const CardModal = (props) => {
	const { recipe } = props

	return (
		<div className="expanded-card">
			<h2 className="expanded-title">{props.recipe.name}</h2>
			<div className="expanded-info">
				<h4>Serves: {recipe.yield}</h4>
				<h4>Calories per Serving: {recipe.calories}</h4>
				<h4>Source: {recipe.source}</h4>
			</div>
		</div>
	)
}