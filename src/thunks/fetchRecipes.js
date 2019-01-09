import { isLoading, hasErrored, fetchRecipeSuccess } from '../actions'
import { cleanRecipes } from '../helper'

export const fetchRecipes = (url) => {
	return async (dispatch) => {
		try {
			dispatch(isLoading(true))
			const response = await fetch(url)
			if (!response.ok) {
				throw Error(response.statusText)
			}
			dispatch(isLoading(false))
			const result = await response.json()
			const recipes = cleanRecipes(result.hits)

			dispatch(fetchRecipeSuccess(recipes))
		} catch (err) {
			dispatch(hasErrored(err.message))
		}
	}
}
