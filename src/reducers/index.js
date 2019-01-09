import { combineReducers } from 'redux'
import { favoriteReducer } from './favoriteReducer'
import { cardReducer } from './cardReducer'
import { recipeReducer, isLoading, hasErrored } from './recipeReducer'

const rootReducer = combineReducers({
	favorites: favoriteReducer,
	recipes: recipeReducer,
	error: hasErrored,
	isLoading: isLoading,
	selectedCard: cardReducer
})

export default rootReducer