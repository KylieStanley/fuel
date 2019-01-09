import React from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import ListContainer from '../containers/ListContainer'
import CardContainer from '../containers/CardContainer'

export const List = (props) => {
	return (
		<div className="list-container">
			<Menu />
			<h1 className="header">fuel<span>{props.itemType}</span></h1>
			{props.itemType === 'favorites' ? <CardContainer itemType={props.itemType} /> : <ListContainer /> }
		</div>
	)
}

export default List


List.propTypes = {
	itemType: PropTypes.string
}
