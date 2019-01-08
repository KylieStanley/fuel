import React from 'react'
import '../styles/main.scss';

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
			<a href={recipe.url} target="_blank" rel="noopener noreferrer" className="link">Go To Full Recipe >></a>
		</div>
	)
}