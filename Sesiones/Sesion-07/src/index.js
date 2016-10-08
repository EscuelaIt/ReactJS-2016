import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/App'
import counterApp from './reducers/counterApp'
import { logger } from './middlewares/logger'

let store = createStore(counterApp, applyMiddleware(logger))

const ReduxExample = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxExample
