export const isLoading = (bool) => ({
   type: 'IS_LOADING',
   isLoading: bool
})
	
export const hasErrored = (message) => ({
   type: 'HAS_ERRORED',
   message
})

export const addFavorite = (fave) => ({
   type: 'ADD_FAVORITE',
   fave
})

export const removeFavorite = (fave) => ({
   type: 'REMOVE_FAVORITE',
   fave
})

export const fetchRecipeSuccess = (recipes) => ({
   type: 'FETCH_RECIPE_SUCCESS',
   recipes
})

export const searchRecipeSuccess = (recipes) => ({
   type: 'SEARCH_RECIPE_SUCCESS',
   recipes
})

export const expandCard = (recipes) => ({
   type: 'EXPAND_CARD',
   recipes
})