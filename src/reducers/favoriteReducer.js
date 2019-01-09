export const favoriteReducer = (state=[], action) => {
	switch(action.type) {
	case 'ADD_FAVORITE':
		return [...state, { ...action.favorite }]
	case 'REMOVE_FAVORITE':
		return state.filter(favorite => favorite.url !== action.favorite.url)
	default: 
		return state
	}
}
