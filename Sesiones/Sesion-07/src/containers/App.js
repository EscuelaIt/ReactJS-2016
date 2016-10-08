import React, { Component, PropTypes } from 'react'
import { Counter, InputList } from '../components'
import { connect } from 'react-redux'

class ReduxExample extends Component {
  constructor (...args) {
    super(...args)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    // TODO
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Counter {...this.props} onAdd={this.handleAdd} />
        </div>
        <div className='row'>
          <InputList {...this.props} />
        </div>
      </div>
    )
  }
}

ReduxExample.propTypes = {
  counter: PropTypes.number
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ReduxExample)
