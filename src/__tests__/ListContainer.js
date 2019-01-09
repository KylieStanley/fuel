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
