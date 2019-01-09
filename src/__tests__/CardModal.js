import React from 'react'
import { shallow } from 'enzyme'
import { CardModal, mapDispatchToProps } from '../containers/CardModal'
import { addIngredients } from '../actions'

describe('Card', () => {
	let wrapper
	let mockRecipe

	beforeEach(() => {
		mockRecipe = {
			name: 'chicken pasta',
			url: 'chicken.com',
			dietLabel: ['Low Carb'],
			ingredients: ['chicken', 'beef']
		}

		wrapper = shallow(
			<CardModal recipe={mockRecipe} addIngredients={jest.fn()} />
		)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render all the ingredients', () => {
		expect(wrapper.find('li').length).toEqual(2)
	})

	describe('mapDispatchToProps', () => {
		let mockDispatch

		beforeEach(() => {
			mockDispatch = jest.fn()
		})

		it('should call dispatch with the correct params', () => {
			const ingredients = ['chicken', 'salt', 'avocado']
			const actionToDispatch = addIngredients(ingredients)
			const result = mapDispatchToProps(mockDispatch)
			result.addIngredients(ingredients)

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})
	})
})
