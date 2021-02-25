import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducer from '../RootReducer';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store