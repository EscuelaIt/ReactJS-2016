import React, { Component, PropTypes } from 'react'

class SearchFilters extends Component {
  constructor (...args) {
    super(...args)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.onFilter({
      text: this.input.value
    })
  }

  handleChange (evt) {
    this.props.onFilter({
      text: this.input.value
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <form className='col s12' onSubmit={this.handleSubmit}>
            <div className='input-field col s8'>
              <input onChange={this.handleChange} id='teacher_name' ref={(node) => this.input = node} type='text' className='validate' value={this.props.filter} />
              <label htmlFor='teacher_name'>Nombre del profesor</label>
            </div>
            <div className='input-field col s4'>
              <button className='btn waves-effect waves-light' type='submit' name='action'>Buscar
                <i className='material-icons right'>search</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

SearchFilters.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func
}

export default SearchFilters
