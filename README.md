## Installations

```
npx create-react-app redux-youtube-app
npm install redux
npm install react-redux
npm install uuid
npm install --save @redux-devtools/extension
```

### Issue

Actions dispatched twice within useEffect

`https://stackoverflow.com/questions/72238175/react-18-useeffect-is-getting-called-two-times-on-mount`

- remove the StrictMode to solve it.


### useSelector

- useSelector hook lets your React components read data from the Redux store
- A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.
- selectors can return values from the Redux store state, and also return derived values based on that state as well.

- useSelector automatically subscribes to the Redux store for us.
- any time an action is dispatched, it will call its selector function again right away. If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data.
- useSelector compares its results using strict === reference comparisons, so the component will re-render any time the selector result is a new reference
- each call to useSelector should always return the smallest amount of state possible
  
### Patterns

- Do I always have to put all my app's state into the Redux store? No.
- your global state should go in the Redux store, and your local state should stay in React components.

### Ask these questions

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?
- Most form state probably shouldn't be kept in Redux.

### Middlewares
- Redux store doesn't know anything about async logic.
- Any asynchronicity has to happen outside the store.
- Redux reducers must never contain "side effects"
  
### Patterns

- Action creator pattern
- Memoize selectors (array.map() always returns a new array reference)
- useSelector hook will re-run its selector function after every dispatched action,
- and if the selector result changes, it will force the component to re-render.
- calling useSelector(selectTodoIds) will always cause the component to re-render after every action, because it's returning a new array reference!
- we already saw shallowEqual
- Memoization is a kind of caching - specifically, saving the results of an expensive calculation, and reusing those results if we see the same inputs later.
- Memoization with reselect library
- State normalization - store items in a way which allows finding them directly by ID
- we can write thunk functions that return a promise, and wait on that promise in our components.

### Pain points:

- Patterns are good & they exist for specific reasons, but is verbose & writing them by hand can be difficult. Setting up store is tough at first too. 

### RTK 
- recommended toolset now for redux way of writing 
- Best practices are included
- tasks are simplified
- prevents common mistakes
- easy & enjoyable to write redux apps.

### ConfigureStore 

- thunk is baked in
- store is configured with the root reducer when we use configureStore call
- more middlewares added automatically to check common mistakes like state mutation
- dev tools are configured
- npm uninstall redux redux-thunk reselect
- 