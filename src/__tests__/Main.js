import React from 'react'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { Main, mapStateToProps, mapDispatchToProps } from '../containers/Main'
import { fetchRecipes } from '../thunks/fetchRecipes'

jest.mock('../thunks/fetchRecipes')

describe('Main', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Main fetchRecipes={ jest.fn() } />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should call fetchRecipes when mounted', () => {
		expect(wrapper.instance().props.fetchRecipes).toHaveBeenCalled()
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