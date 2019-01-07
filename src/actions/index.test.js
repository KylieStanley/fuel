import * as actions from './index';

describe('actions', () => {
	it('should have a type of ADD_FAVORITE with a favorite Object', () => {
		const favorite = {name: 'Chicken Pasta'}
		const expected = {
			type: 'ADD_FAVORITE',
			favorite,
		}

		const result = actions.addFavorite(favorite)
		expect(result).toEqual(expected)
	})

	it('should have a type of REMOVE_FAVORITE with a favorite Object', () => {
		const favorite = {name: 'Chicken Pasta'}
		const expected = {
			type: 'REMOVE_FAVORITE',
			favorite,
		}

		const result = actions.removeFavorite(favorite)
		expect(result).toEqual(expected)
	})

	it('should have a type of IS_LOADING with boolean', () => {
		const isLoading = true
		const expected = {
			type: 'IS_LOADING',
			isLoading,
		}

		const result = actions.isLoading(isLoading)
		expect(result).toEqual(expected)
	})

	it('should have a type of HAS_ERRORED with an error message ', () => {
		const message = 'error retrieving info'
		const expected = {
			type: 'HAS_ERRORED',
			message,
		}

		const result = actions.hasErrored(message)
		expect(result).toEqual(expected)
	})

	it('should have a type of FETCH_RECIPE_SUCCESS with a recipe array', () => {
		const recipes = [{name: 'chicken'}]
		const expected = {
			type: 'FETCH_RECIPE_SUCCESS',
			recipes,
		}

		const result = actions.fetchRecipeSuccess(recipes)
		expect(result).toEqual(expected)
	})

	it('should have a type of SELECT_CARD with a recipe object', () => {
		const recipe = {name: 'chicken'}
		const expected = {
			type: 'SELECT_CARD',
			recipe,
		}

		const result = actions.selectCard(recipe)
		expect(result).toEqual(expected)
	})
})