import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'
import '../styles/main.scss';
import { Link, withRouter } from 'react-router-dom'
import 'react-router-modal/css/react-router-modal.css'
import Main from './Main'
import { Modal } from '../Modal'
import { ModalContainer, ModalRoute } from 'react-router-modal';



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

	selectCard = () => {
		console.log('selected')
	}


	render() {
  	let { favorites, recipe } = this.props
  	let favorite = favorites.find(favorite => favorite.url === recipe.url)
  	let favoriteClass = favorite ? <i className="favorite fas fa-heart"></i> : <i className="far fa-heart"></i>
		
		return (
			<div className="card">
				<div className="image" style={{ backgroundImage: `url(${ recipe.image })` }} />
				<div className="recipe-info">
					<Link to={`${this.props.match.url}/modal`} onClick={this.selectCard}>
						<h3>{ recipe.name }</h3>
					</Link>	
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))