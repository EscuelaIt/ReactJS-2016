import React from 'react'
import SampleSpa from '@typeform/sample-spa'
import { createStore } from 'redux'
import root from '../../src/reducers/root'

const store = createStore(root)

export default () => <SampleSpa store={store} />
