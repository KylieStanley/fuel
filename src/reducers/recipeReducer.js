export const recipeReducer = (state = [], action) => {
	switch (action.type) {
	case 'FETCH_RECIPE_SUCCESS':
		return action.recipes
	default:
		return state
	}
}

export const isLoading = (state = false, action) => {
	switch (action.type) {
	case 'IS_LOADING':
		return action.isLoading
	default:
		return state
	}
}

export const hasErrored = (state = '', action) => {
	switch (action.type) {
	case 'HAS_ERRORED':
		return action.message
	default:
		return state
	}
}
