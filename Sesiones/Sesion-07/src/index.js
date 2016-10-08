import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
import counterApp from './reducers/counterApp'

let store = createStore(counterApp)

const ReduxExample = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxExample
