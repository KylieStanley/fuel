import { recipeReducer, isLoading, hasErrored } from '../recipeReducer'
import * as actions from '../../actions'

describe('recipeReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = recipeReducer(undefined, [])
		expect(result).toEqual(expected)
	})

	it('should return the state with a new recipe array', () => {
		const recipes = [{name: 'chicken pasta'}, {name: 'salmon pesto'}]
		const expected = recipes
		const result = recipeReducer([], actions.fetchRecipeSuccess(recipes))
		expect(result).toEqual(expected)
	})

	describe('isLoading', () => {
		it('should return state with a true or false value', () => {
			const bool = true
			const result = isLoading(false, actions.isLoading(bool))
			expect(result).toEqual(bool)
		})

		it('should return default state', () => {
		const expected = false
		const result = isLoading(undefined, false)
		expect(result).toEqual(expected)
	})
	})

	describe('hasErrored', () => {
		it('should return the state with an error message', () => {
			const message = 'error message'
			const result = hasErrored('', actions.hasErrored(message))
			expect(result).toEqual(message)
		})

		it('should return default state', () => {
		const expected = ''
		const result = hasErrored(undefined, '')
		expect(result).toEqual(expected)
	})
	})
})