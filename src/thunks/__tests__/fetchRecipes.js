import { fetchRecipes } from '../fetchRecipes'
import { isLoading, hasErrored, fetchRecipeSuccess } from '../../actions'
import * as helper from '../../helper'


describe('fetchRecipes', () => {
	let mockUrl
	let mockDispatch
	let mockRecipeFetch
	let mockRecipes

	beforeEach(() => {
		mockRecipeFetch = [{
			bookmark: false,
			recipe: {
			label: 'chicken',
			yield: 4,
			calories: 100,
			dietLabels: 'Low Carb',
			url: 'chicken.com',
			image: 'chicken.jpg'
		}}]

		mockRecipes = [{
			bookmark: false,
			name: 'chicken',
			yield: 4,
			calories: 25,
			dietLabel: 'Low Carb',
			url: 'chicken.com',
			image: 'chicken.jpg'
		}]

		 mockUrl = 'recipes.com'
		 mockDispatch = jest.fn()
	})

	it('should call dispatch with the isLoading action', () => {
		const thunk = fetchRecipes(mockUrl)
		thunk(mockDispatch)
		expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
	})

	it('should dispatch hasErrored with a message if the response is not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: false,
			statusText: 'Something went wrong'
		}))

		const thunk = fetchRecipes(mockUrl)		

		await thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
	})

	it('should dispatch isLoading(false) if the response is ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: true
		}))

		const thunk = fetchRecipes(mockUrl)

		await thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
	})

	it('should dispatch fetchRecipeSuccess if the response is ok', async () => {
    helper.cleanRecipes = jest.fn().mockImplementation(() => mockRecipes)

		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: true,
			json: () => Promise.resolve({
				hits: mockRecipeFetch
			})
		}))

		const thunk = fetchRecipes(mockUrl)

		await thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(fetchRecipeSuccess(mockRecipes))
	})
})