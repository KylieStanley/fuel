import React from 'react'
import Search from './Search'
import CardContainer from './CardContainer'

const Home = () => {
	return (
		<div className="main-container">
			<h1 className="header">fuel<span>favorites</span></h1>
			<CardContainer />
		</div>
	)
}

export default Home


