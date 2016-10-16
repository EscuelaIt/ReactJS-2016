import React from 'react'
import SampleSpa from '@typeform/sample-spa'
import { createStore, applyMiddleware } from 'redux'
import root from '../../src/reducers/root'
import thunk from 'redux-thunk'

const store = createStore(root, applyMiddleware(thunk))

export default () => <SampleSpa store={store} />
