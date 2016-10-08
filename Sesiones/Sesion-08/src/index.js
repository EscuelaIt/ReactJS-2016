import React from 'react'
import App from './containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import searcher from './reducers/searcher'

let store = createStore(searcher)

const SampleSpa = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default SampleSpa
