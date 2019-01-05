import React from 'react'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'
import '../styles/main.scss';

export const Card = (props) => {

	let favorite = props.favorites.find(favorite => {
      return favorite.url === props.recipe.url
    })

	const toggleFavorite = () => {
		if(favorite) {
			props.removeFavorite(props.recipe)
		} else {
			props.addFavorite(props.recipe)
		}
	}

  let favoriteClass = favorite ? <i class="favorite fas fa-heart"></i> : <i className="far fa-heart"></i>

	return (
		<div className="card">
			<div className="image" style={{ backgroundImage: `url(${ props.recipe.image })` }}>
			</div>
			<div className="recipe-info">
				<h3>{ props.recipe.name }</h3>
				<div className="card-bottom">
					<button className="fave-btn" onClick={ toggleFavorite }>
						{ favoriteClass }
					</button>
					<p>{ props.recipe.dietLabel }</p>
				</div>
			</div>
		</div>
		
	)
}

export const mapStateToProps = (state) => ({
	recipes: state.recipes,
	favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (recipe) => dispatch(addFavorite(recipe)),
  removeFavorite: (recipe) => dispatch(removeFavorite(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)