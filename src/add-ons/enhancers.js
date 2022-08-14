/**
  Enhancers lets us customize the store when it is created
  It can wrap the store and can override methods 
  store has various methods - like dispatch, getState, subscribe. 
  If we want, we can override any of them using enhancers 

  Enhancers modify the behavior of store. 
     addLoggingOnDispatch - changed how dispatch works
     addAppVersion - changed how getState works.
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

export const addAppVersion = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);
    function newGetState() {
      return {
        ...store.getState(),
        appVersion: 1.0,
      };
    }
    return {
      ...store,
      getState: newGetState,
    };
  };
};
