import React from 'react'
import App from './containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import searcher from './reducers/searcher'

let store = createStore(searcher)

const SampleSpa = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>
)

export default SampleSpa
