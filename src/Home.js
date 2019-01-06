import React from 'react'
import Search from './Search'
import Menu	 from './Menu'
import CardContainer from './containers/CardContainer'

export const Home = (props) => {

	return (
		<div className="main-container">
		<Menu />
			<h1 className="header">fuel<span>{props.itemType}</span></h1>
			<CardContainer itemType={props.itemType}/>
		</div>
	)
}

export default Home