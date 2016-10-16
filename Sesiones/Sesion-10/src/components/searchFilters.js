import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

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
      <nav className='orange'>
        <div className='nav-wrapper'>
          <div className='col s12'>
            {
              this.props.onFilter
              ? <form onSubmit={this.handleSubmit}>
                  <div className='input-field'>
                    <input onChange={this.handleChange} ref={(node) => this.input = node} id='search' type='search' value={this.props.filter} required />
                    <label htmlFor='search'><i className='material-icons'>search</i></label>
                    <i className='material-icons'>close</i>
                  </div>
                </form>
              : <a href='/' className='brand-logo'>Curso de React.JS</a>
            }
          </div>
        </div>
      </nav>
    )
  }
}

SearchFilters.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func
}

export default SearchFilters
