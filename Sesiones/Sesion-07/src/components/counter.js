import React, { PropTypes } from 'react'

const Counter = ({counter, onAdd}) => (
  <div>
    <h1>{counter}</h1>
    <a className='btn-floating btn-large waves-effect waves-light red' onClick={onAdd}>
      <i className='material-icons'>add</i>
    </a>
  </div>
)

Counter.propTypes = {
  onAdd: PropTypes.func
}

export default Counter
