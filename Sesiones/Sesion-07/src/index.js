import React from 'react'
import {Counter, InputList} from './components'

const ReduxExample = ({props}) => (
  <div className='container'>
    <div className='row'>
      <Counter />
    </div>
    <div className='row'>
      <InputList counter={1} />
    </div>
  </div>
)

export default ReduxExample
