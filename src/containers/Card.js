import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite, selectCard } from '../actions'
import '../styles/main.scss';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'


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
  	let favoriteClass = favorite ? <i className="favorite fas fa-heart"></i> : <i className="far fa-heart"></i>
		
		return (
			<div className="card">
				<div className="image" style={{ backgroundImage: `url(${ recipe.image })` }} />
				<div className="recipe-info">
					<Link to={`${this.props.match.url}/modal`} onClick={this.props.selectCard.bind(null, this.props.recipe)}>
						<h3 className="recipe-name">{ recipe.name }</h3>
					</Link>	
					<div className="card-bottom">
						<button className="fave-btn" onClick={ this.toggleFavorite }>
							{ favoriteClass }
						</button>
						{ recipe.dietLabel.map(label => <p>{ label }</p>) }
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
  removeFavorite: (recipe) => dispatch(removeFavorite(recipe)),
  selectCard: (recipe) => dispatch(selectCard(recipe))
})

Card.propTypes = {
	addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  selectCard: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))