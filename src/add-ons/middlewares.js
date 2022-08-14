/**
 ### Middleware

  Enhancers are powerful because they can override or replace any of the store's 
  methods: dispatch, getState, and subscribe.
  Redux uses a special kind of addon called middleware to let us customize the dispatch function.
  The best feature of middleware is that it's composable in a chain. 
  Redux middleware provides a third-party extension point between dispatching
  an action, and the moment it reaches the reducer. 

  Middleware form a pipeline around the store's dispatch method.
  middleware can have side effects inside,
  custom middleware are a great way to add specific behaviors to a Redux application.
  Midleware can be used in:

  Log something to the console
  Set timeouts
  Make asynchronous API calls
  Modify the action
  Pause the action or even stop it entirely 
*/

export const blockActionMW = (store) => (next) => (action) => {
  console.log('Hit middleware');
  if (action.type === 'products/BOXING_DAY_OFFERS') return;
  else return next(action);
};

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};
