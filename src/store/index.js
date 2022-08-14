import { legacy_createStore as createStore, compose } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import { addLoggingOnDispatch, addAppVersion } from '../add-ons/enhancers';

const rootReducer = combineReducers({
  products: productsReducer,
});

const composedEnhancer = compose(addLoggingOnDispatch, addAppVersion);

// CREATE A STORE
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(composedEnhancer)
);

console.log('MODIFIED WITH ENHANCER --> ', store.getState());

// EXPOSE IT OUTSIDE
export default store;
