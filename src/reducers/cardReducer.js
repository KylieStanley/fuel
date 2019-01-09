export const cardReducer = (state = {}, action) => {
	switch (action.type) {
	case 'SELECT_CARD':
		return action.recipe
	default:
		return state
	}
}
