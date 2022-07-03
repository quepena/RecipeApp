import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { recipesListReducer } from './reducers/recipesReducer'

const reducer = combineReducers({
    recipeList: recipesListReducer,
})

const initialState = {};
const middleWare = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))