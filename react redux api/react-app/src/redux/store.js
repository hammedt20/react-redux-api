import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevtools } from 'redux-devrtools-extension'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, composeWithDevtools(applyMiddleware(logger, thunk)))

export default store