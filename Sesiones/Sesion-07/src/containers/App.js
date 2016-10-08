import React, { PropTypes } from 'react'
import { Counter, InputList } from '../components'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'

const ReduxExample = ({counter, onAdd}) => (
  <div className='container'>
    <div className='row'>
      <Counter counter={counter} onAdd={onAdd} />
    </div>
    <div className='row'>
      <InputList counter={counter} />
    </div>
  </div>
)

ReduxExample.propTypes = {
  counter: PropTypes.number,
  onAdd: PropTypes.func
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch(increment())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample)
