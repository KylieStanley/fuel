import React from 'react'
import { NavLink } from 'react-router-dom'


const ErrorPage = () => {
	return (
		<div className="error-page">
			<h1>404</h1>
			<h2 className="error">
      	The page you requested cannot be found. Please check your address and try again.
			</h2>
			<NavLink to='/main' className="home-btn">HOME</NavLink>
		</div>
	)
}

export default ErrorPage