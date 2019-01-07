import React from 'react'
import 'react-router-modal/css/react-router-modal.css'


export const Modal = (props) => {
	return (
		<div>{props.recipe.name}

		{props.recipe.yield}

		</div>
	)
}