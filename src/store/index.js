import { legacy_createStore as createStore, compose } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import { addLoggingOnDispatch, addAppVersion } from '../add-ons/enhancers';
import { blockActionMW, loggerMiddleware } from '../add-ons/middlewares';

const rootReducer = combineReducers({
  products: productsReducer,
});

const composedEnhancer = compose(addLoggingOnDispatch, addAppVersion);
const middlewareEnhancer = applyMiddleware(blockActionMW, loggerMiddleware);

// CREATE A STORE
const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(composedEnhancer, middlewareEnhancer)
);

console.log('MODIFIED WITH ENHANCER --> ', store.getState());

// EXPOSE IT OUTSIDE
export default store;
