/**
  Enhancers lets us customize the store when it is created
  It can wrap the store and can override methods 
  store has various methods - like dispatch, getState, subscribe. 
  If we want, we can override any of them using enhancers 
 */
export const addLoggingOnDispatch = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newDispatch(action) {
      const result = store.dispatch(action);
      console.log('Logging the action....');
      return result;
    }

    return { ...store, dispatch: newDispatch };
  };
};
