import { cardReducer } from '../cardReducer'
import * as actions from '../../actions'

describe('cardReducer', () => {
	it('should return default state', () => {
		const expected = {}
		const result = cardReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should return the state with a new recipe', () => {
		const recipe = {name: 'chicken pasta'}
		const expected = recipe
		const result = cardReducer({}, actions.selectCard(recipe))
		expect(result).toEqual(expected)
	})
})