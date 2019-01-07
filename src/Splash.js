import React from 'react'
import './styles/main.scss';
import { Link } from 'react-router-dom'


const Splash = () => {
	return (
		<div className="splash-text">
			<h1>fuel</h1>
			<h2>Recipes and Nutrition to support your training</h2>
			<Link to='/main/'>
				<button className="splash-btn">Find Your Fuel <i className="fas fa-caret-right"></i></button>
			</Link>
		</div>
	)	
}

export default Splash