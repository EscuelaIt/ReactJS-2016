import React from 'react'
import { Searcher, Teacher } from './containers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import searcher from './reducers/searcher'

let store = createStore(searcher)

const SampleSpa = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={Searcher} />
      <Route path='/teacher/(:id)' component={Teacher} />
    </Router>
  </Provider>
)

export default SampleSpa
