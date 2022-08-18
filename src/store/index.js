import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import favoritesReducer from './favorites';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(middlewareEnhancer)
);

export default store;
