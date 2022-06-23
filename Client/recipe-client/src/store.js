import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { recipesListReducer, recipeDetailsReducer, favsReducer } from './reducers/recipesReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['favs']
}

const reducer = combineReducers({
    recipeList: recipesListReducer,
    recipeDetail: recipeDetailsReducer,
    favReducer: persistReducer(persistConfig, favsReducer),
})

const initialState = {};
const middleWare = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export const persistor = persistStore(store);