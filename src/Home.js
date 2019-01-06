import React from 'react'
import Search from './Search'
import Menu	 from './Menu'
import CardContainer from './containers/CardContainer'

const Home = () => {
	return (
		<div className="main-container">
		<Menu />
			<h1 className="header">fuel<span>favorites</span></h1>
			<CardContainer />
		</div>
	)
}

export default Home


