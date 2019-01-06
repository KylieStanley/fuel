import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'
import '../styles/main.scss';

export class Card extends Component {


	toggleFavorite = (favorite) => {
		let { favorites, recipe, removeFavorite, addFavorite } = this.props
		
		let match = favorites.find(favorite => favorite.url === recipe.url)

		if(match) {
			removeFavorite(recipe)
		} else {
			addFavorite(recipe)
		}
	}

  render() {
  	let { favorites, recipe } = this.props
  	let favorite = favorites.find(favorite => favorite.url === recipe.url)
  	let favoriteClass = favorite ? <i class="favorite fas fa-heart"></i> : <i className="far fa-heart"></i>
		
		return (
			<div className="card">
				<div className="image" style={{ backgroundImage: `url(${ recipe.image })` }}>
				</div>
				<div className="recipe-info">
					<h3>{ recipe.name }</h3>
					<div className="card-bottom">
						<button className="fave-btn" onClick={ this.toggleFavorite }>
							{ favoriteClass }
						</button>
						<p>{ recipe.dietLabel }</p>
					</div>
				</div>
			</div>	
		)
  }
}

export const mapStateToProps = (state) => ({
	favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (recipe) => dispatch(addFavorite(recipe)),
  removeFavorite: (recipe) => dispatch(removeFavorite(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)