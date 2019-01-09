import React from 'react'
import { shallow } from 'enzyme'
import { ListContainer, mapStateToProps } from '../containers/ListContainer'

describe('ListContainer', () => {
	let wrapper
	let mockIngredients

	beforeEach(() => {
		mockIngredients = ['chicken', 'salt', 'avocado']

		wrapper = shallow(
			<ListContainer ingredients={mockIngredients} />
		)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should display a message with no ingredients', () => {
		wrapper = shallow(
			<ListContainer ingredients={[]} />
		)
		expect(wrapper.find('h4').length).toEqual(1)
	})

	describe('mapStateToProps', () => {
		it('should return an array of recipes and array of ingredients', () => {
			const mockState = {
				recipes: { name: 'chicken' },
				favorites: { name: 'salmon' },
				ingredients: ['chicken', 'salt', 'avocado']
			}
			const expected = { ingredients: mockState.ingredients }
			const result = mapStateToProps(mockState)

			expect(result).toEqual(expected)
		})
	})
})
