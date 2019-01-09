import { ingredientReducer } from '../ingredientReducer'
import * as actions from '../../actions'

describe('ingredientReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = ingredientReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should return the state with new ingredients', () => {
		const ingredients = ['chicken', 'salt']
		const expected = ingredients
		const result = ingredientReducer([], actions.addIngredients(ingredients))
		expect(result).toEqual(expected)
	})
})