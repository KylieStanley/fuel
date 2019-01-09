import { combineReducers } from 'redux'
import { favoriteReducer } from './favoriteReducer'
import { cardReducer } from './cardReducer'
import { ingredientReducer } from './ingredientReducer'
import { recipeReducer, isLoading, hasErrored } from './recipeReducer'

const rootReducer = combineReducers({
	favorites: favoriteReducer,
	recipes: recipeReducer,
	error: hasErrored,
	isLoading,
	selectedCard: cardReducer,
	ingredients: ingredientReducer
})

export default rootReducer
