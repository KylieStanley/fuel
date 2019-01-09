export const ingredientReducer = (state = [], action) => {
	switch (action.type) {
	case 'ADD_INGREDIENTS':
		return action.ingredients
	default:
		return state
	}
}
