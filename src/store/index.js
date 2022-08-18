import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';
import { productAPIMW } from '../add-ons/middlewares';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const middlewareEnhancer = applyMiddleware(productAPIMW);
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(middlewareEnhancer)
);

export default store;
