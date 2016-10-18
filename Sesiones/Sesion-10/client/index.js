import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from '../src'
import root from '../src/reducers/root'
import './index.scss'
import thunk from 'redux-thunk'

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(root, preloadedState, applyMiddleware(thunk))

render(
  <App store={store} />,
  document.getElementById('root')
)
