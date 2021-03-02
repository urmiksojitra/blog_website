// import { createStore, applyMiddleware } from 'redux'

// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger'
// import RootReducer from '../RootReducer';

// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store


import { createStore, applyMiddleware, compose } from 'redux';
// import LoginReducers from './Reducers/LoginReducers';
import thunkMiddleware from 'redux-thunk';
// import { rootReducer } from './Reducers/index';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/RootReducer';

//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store;