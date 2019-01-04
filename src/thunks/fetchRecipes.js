import { isLoading, hasErrored, fetchRecipeSuccess } from '../actions'
import { apiKey, apiId } from '../apiKey'
import cleanRecipes from '../helper.js'

export const fetchRecipes = () => {
  let url = `https://api.edamam.com/search?q=ma&app_id=${apiId}&app_key=${apiKey}&from=0&to=30`
   return async (dispatch) =>  {
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
