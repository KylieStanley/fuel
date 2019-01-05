import React from 'react'
import { CardContainer, mapStateToProps } from '../containers/CardContainer'
import { shallow } from 'enzyme'

describe('CardContainer', () => {
	let wrapper
	let mockRecipes = [{ name: 'chicken' }]

	beforeEach(() => {
		wrapper = shallow(<CardContainer recipes={ mockRecipes } />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	describe('mapStateToProps', () => {
		it('should return an array of recipes', () => {
			const mockState = {
				recipes: { name: 'chicken' },
				favorites: { name: 'salmon'}
			}
			const expected = { recipes: mockState.recipes }
			const result = mapStateToProps(mockState)
			expect(result).toEqual(expected)
		})
	})
})