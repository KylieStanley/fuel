import React from 'react'
import './styles/main.scss';

const Card = (props) => {
	return (
		<div className="card">
			<div className="image" style={ {backgroundImage: `url(${props.recipe.image})`}}>
			</div>
			<div className="recipe-info">
				<h3>{props.recipe.name}</h3>
				<div className="card-bottom">
					<button className="fave-btn">
						<i className="far fa-heart"></i>
					</button>
					<p>{props.recipe.dietLabel}</p>
				</div>
			</div>
		</div>
		
	)
}

export default Card