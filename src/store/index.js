import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';

const rootReducer = combineReducers({
  products: productsReducer,
});

// CREATE A STORE
const store = createStore(rootReducer, composeWithDevTools());

// EXPOSE IT OUTSIDE
export default store;
