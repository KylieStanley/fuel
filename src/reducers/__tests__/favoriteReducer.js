import { favoriteReducer } from '../favoriteReducer'
import * as actions from '../../actions'

describe('favoriteReducer', () => {
	it('should return default state', () => {
		const expected = []
		const result = favoriteReducer(undefined, {})
		expect(result).toEqual(expected)
	})

	it('should return the state with a new favorites array', () => {
		const favorites = [{name: 'chicken pasta'}, {name: 'salmon pasta'}]
		const newFavorite = { name: 'beef' }
		const expected = [{name: 'chicken pasta'}, {name: 'salmon pasta'}, { name: 'beef' }]
		const result = favoriteReducer(favorites, actions.addFavorite(newFavorite))
		expect(result).toEqual(expected)
	})

	it('should return the state with an array minus the removed favorite', () => {
		const favorites = [{name: 'chicken pasta', url: 'chicken.com'}, {name: 'salmon pasta', url: 'salmon.com'}]
		const favoriteToRemove = { name: 'salmon pasta', url: 'salmon.com'}
		const expected = [{name: 'chicken pasta', url: 'chicken.com' }]
		const result = favoriteReducer(favorites, actions.removeFavorite(favoriteToRemove))
		expect(result).toEqual(expected)
	})
})