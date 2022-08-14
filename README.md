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