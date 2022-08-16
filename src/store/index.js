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
const persistedStorageItems = localStorage.getItem('APP_PRODUCTS');
let preLoadedState;
if (persistedStorageItems) {
  preLoadedState = {
    products: JSON.parse(persistedStorageItems),
  };
}
// CREATE A STORE
const store = createStore(
  rootReducer,
  preLoadedState,
  composeWithDevTools(composedEnhancer, middlewareEnhancer)
);

console.log('MODIFIED WITH ENHANCER --> ', store.getState());

// EXPOSE IT OUTSIDE
export default store;
