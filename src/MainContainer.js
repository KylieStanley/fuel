import React from 'react'
import Search from './Search'
import CardContainer from './CardContainer'
import Home from './Home'
import { Route } from 'react-router-dom'


const MainContainer = () => {
	return (
		<div className="main-container">
			<div className="main-text">
				<h1 className="fuel">fuel</h1>
				<h3>Recipes and Nutrition to support your training</h3>
			</div>
			<Search />
			<CardContainer />
		</div>
	)
}

export default MainContainer