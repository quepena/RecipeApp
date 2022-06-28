import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { recipesListReducer, recipeDetailsReducer } from './reducers/recipesReducer'

const reducer = combineReducers({
    recipeList: recipesListReducer,
    recipeDetail: recipeDetailsReducer,
})

const initialState = {};
const middleWare = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))