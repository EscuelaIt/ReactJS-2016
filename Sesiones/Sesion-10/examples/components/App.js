import React from 'react'
import SampleSpa from '@typeform/sample-spa'
import { createStore, applyMiddleware } from 'redux'
import root from '../../src/reducers/root'
import thunk from 'redux-thunk'
import { logger } from '../../src/middlewares/logger'

const store = createStore(
  root,
  applyMiddleware(thunk),
  applyMiddleware(logger)
)

export default () => <SampleSpa store={store} />
