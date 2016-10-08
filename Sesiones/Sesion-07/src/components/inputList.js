import React, { PropTypes } from 'react'
import Input from './input'

const InputList = ({counter}) => (
  <form className='col s12'>
    <div className='row'>
      {Array.apply(null, { length: counter }).map((_, index) => <Input key={index} />)}
    </div>
  </form>
)

InputList.PropTypes = {
  counter: PropTypes.number
}

export default InputList
