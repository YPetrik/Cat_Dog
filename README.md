Redux
 1. npm i react-redux
 2. npm i redux-thunk
 3. npm i redux-devtools-extension


Поехали 

1. Создаем папку в src --> redux. -->
    1.1 в папке redux создаем папку actions  и reducers.-->
      1.2 далее в папку redux создаем файлы store.js, types.js и initialState.js
2. В файле store.js пишем ---> export const store = createStore(rootReducer, initialState(),composeWithDevTools(applyMiddleware(thunk)))