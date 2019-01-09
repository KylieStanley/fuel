import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { addFavorite, removeFavorite, selectCard } from '../actions'
import '../styles/main.scss'


export class Card extends Component {
	toggleFavorite = () => {
		const {
			favorites, recipe, removeFavorite, addFavorite
		} = this.props

		const match = favorites.find(favorite => favorite.url === recipe.url)

		if (match) {
			removeFavorite(recipe)
		} else {
			addFavorite(recipe)
		}
	}

	render() {
		const { favorites, recipe, selectCard } = this.props
		const favorite = favorites.find(favorite => favorite.url === recipe.url)
		const favoriteClass = favorite ? <i className="favorite fas fa-heart" /> : <i className="far fa-heart" />

		return (
			<div className="card">
				<div className="image" style={{ backgroundImage: `url(${recipe.image})` }} />
				<div className="recipe-info">
					<Link to={`${this.props.match.url}/modal`} onClick={selectCard.bind(null, recipe)}>
						<h3 className="recipe-name">{recipe.name}</h3>
					</Link>
					<div className="card-bottom">
						<button type="button" className="fave-btn" onClick={this.toggleFavorite}>
							{favoriteClass}
						</button>
						{recipe.dietLabel.map(label => <p>{label}</p>)}
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
	favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))
