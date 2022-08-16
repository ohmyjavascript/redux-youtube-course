import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const persistedStorageItems = localStorage.getItem('APP_PRODUCTS');
let preLoadedState;
if (persistedStorageItems) {
  preLoadedState = {
    products: JSON.parse(persistedStorageItems),
  };
}

const store = createStore(rootReducer, preLoadedState, composeWithDevTools());

export default store;
