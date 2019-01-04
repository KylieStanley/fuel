export const isLoading = (bool) => ({
   type: 'IS_LOADING',
   isLoading: bool
})
	
export const hasErrored = (message) => ({
   type: 'HAS_ERRORED',
   message
})

export const addFavorite = (favorite) => ({
   type: 'ADD_FAVORITE',
   favorite
})

export const removeFavorite = (favorite) => ({
   type: 'REMOVE_FAVORITE',
   favorite
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