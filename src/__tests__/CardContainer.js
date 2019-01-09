import React from 'react'
import { shallow } from 'enzyme'
import { CardContainer, mapStateToProps } from '../containers/CardContainer'
import Card from '../containers/Card'


describe('CardContainer', () => {
	let wrapper
	const mockRecipes = [{ name: 'chicken' }, { name: 'salmon' }]
	const mockFavorites = [{ name: 'chicken' }]

	beforeEach(() => {
		wrapper = shallow(<CardContainer
			recipes={mockRecipes}
			favorites={mockFavorites}
			itemType="recipes"
			isLoading={false}
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
			recipes={mockRecipes}
			favorites={mockFavorites}
			itemType="favorites"
			isLoading={false}
		/>)
		expect(wrapper.find(Card).length).toEqual(1)
	})

	it('should render a message if there are no favorites', () => {
		wrapper = shallow(<CardContainer
			recipes={mockRecipes}
			favorites={[]}
			itemType="favorites"
			isLoading={false}
		/>)
		expect(wrapper.find('h2').length).toEqual(1)
	})

	it('should render a loading image if the cards are being fetched', () => {
		wrapper = shallow(<CardContainer
			recipes={mockRecipes}
			favorites={[]}
			itemType="favorites"
			isLoading
		/>)
		expect(wrapper.find('img').length).toEqual(1)
	})

	describe('mapStateToProps', () => {
		it('should return an array of recipes and array of favorites', () => {
			const mockState = {
				recipes: { name: 'chicken' },
				favorites: { name: 'salmon' },
				otherstate: 'item in state'
			}
			const expected = { recipes: mockState.recipes, favorites: mockState.favorites }
			const result = mapStateToProps(mockState)

			expect(result).toEqual(expected)
		})
	})
})
