import React from 'react'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { Main, mapStateToProps, mapDispatchToProps } from '../containers/Main'
import { fetchRecipes } from '../thunks/fetchRecipes'


jest.mock('../thunks/fetchRecipes')

describe('Main', () => {
	let wrapper
	let mockRecipes

	beforeEach(() => {
		mockRecipes = []
		wrapper = shallow(<Main recipes={ mockRecipes } fetchRecipes={ jest.fn() } />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should call fetchRecipes when mounted if there are no recipes in store', () => {
		expect(wrapper.instance().props.fetchRecipes).toHaveBeenCalled()
	})

	it('should not call fetchRecipes recipes in store from search', () => {
		wrapper = shallow(<Main recipes={{ name: 'Chicken' }} fetchRecipes={ jest.fn() } />)

		expect(wrapper.instance().props.fetchRecipes).not.toHaveBeenCalled()
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

	describe('mapDispatchToProps', () => {
		let mockDispatch

		beforeEach(() => {
			mockDispatch = jest.fn()
		})
    
		it('should call dispatch with the correct params', () => {
			const url = 'recipes.com'
			const actionToDispatch = fetchRecipes(url)
			const result = mapDispatchToProps(mockDispatch)
			result.fetchRecipes(url)
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
		})
	})
})