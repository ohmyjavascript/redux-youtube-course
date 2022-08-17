import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, undefined, composeWithDevTools());

export default store;
