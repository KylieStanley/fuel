import { combineReducers } from 'redux'
import { favoriteReducer } from './favoriteReducer'
import { recipeReducer, isLoading, hasErrored } from './recipeReducer'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  recipes: recipeReducer,
  error: hasErrored,
  isLoading: isLoading
})

export default rootReducer