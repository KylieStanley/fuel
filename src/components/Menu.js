import React, { Component } from 'react'
import '../styles/main.scss'
import { NavLink } from 'react-router-dom'

export class Menu extends Component {
	constructor() {
		super()
		this.state = {
			expanded: false
		}
	}

	toggleMenu = () => {
		const expanded = !this.state.expanded
		this.setState({ expanded })
	}

	render() {
		const toggled = this.state.expanded ? 'toggled' : ''

		return (
			<div className={`menu ${toggled}`} onClick={this.toggleMenu}>
				<div className="hamburger" />
				<NavLink to='/main' className="menu-item home">Home</NavLink>
				<NavLink to='/favorites' className="menu-item faves">Favorites</NavLink>
				<NavLink to='/shopping' className="menu-item list">Shopping List</NavLink>
			</div>
		)
	}
}

export default Menu
