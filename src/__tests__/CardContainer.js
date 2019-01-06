import React from 'react'
import { CardContainer, mapStateToProps } from '../containers/CardContainer'
import ReactDOM from 'react-dom';
import Card  from '../containers/Card'
import { connect } from 'react-redux'
import { shallow } from 'enzyme'

describe('CardContainer', () => {
	let wrapper
	let mockRecipes = [{ name: 'chicken' }, { name: 'salmon' }]
	let mockFavorites = [{ name: 'chicken' }]

	beforeEach(() => {
		wrapper = shallow(<CardContainer 
			recipes={ mockRecipes } 
			favorites={ mockFavorites } 
			itemType={ 'recipes' }
		/>)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render recipes if on the main page', () => {
		expect(wrapper.find(Card).length).toEqual(2)
	})

	it('should render favorites if on the favorites page', () => {
		wrapper = shallow(<CardContainer 
			recipes={ mockRecipes } 
			favorites={ mockFavorites } 
			itemType={ 'favorites' }
		/>)
		expect(wrapper.find(Card).length).toEqual(1)
	})

	describe('mapStateToProps', () => {
		it('should return an array of recipes and array of favorites', () => {
			const mockState = {
				recipes: { name: 'chicken' },
				favorites: { name: 'salmon'},
				otherstate: 'item in state'
			}
			const expected = { recipes: mockState.recipes, favorites: mockState.favorites }
			const result = mapStateToProps(mockState)
			expect(result).toEqual(expected)
		})
	})
})