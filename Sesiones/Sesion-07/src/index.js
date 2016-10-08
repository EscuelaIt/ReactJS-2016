import React, {Component} from 'react'
import {Counter, InputList} from './components'

class ReduxExample extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      counter: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Counter {...this.state} onAdd={this.handleAdd} />
        </div>
        <div className='row'>
          <InputList {...this.state} />
        </div>
      </div>
    )
  }
}

export default ReduxExample
