import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import CardContainer from '../containers/CardContainer'

export const List = (props) => {
	return (
		<div className="list-container">
			<Menu />
			<h1 className="header">fuel<span>{props.itemType}</span></h1>
			<CardContainer itemType={props.itemType} />
		</div>
	)
}

export default List


List.propTypes = {
	itemType: PropTypes.string.isRequired
}
