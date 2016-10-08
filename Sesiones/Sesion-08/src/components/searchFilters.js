import React, { PropTypes } from 'react'

const SearchFilters = ({ onFilter }) => {
  let input

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onFilter({
      text: input.value
    })
  }

  const handleChange = (evt) => {
    onFilter({
      text: input.value
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <form className='col s12' onSubmit={handleSubmit}>
          <div className='input-field col s6'>
            <input onChange={handleChange} id='teacher_name' ref={(node) => input = node} type='text' className='validate' />
            <label htmlFor='teacher_name'>Nombre del profesor</label>
          </div>
          <div className='input-field col s6'>
            <button className='btn waves-effect waves-light' type='submit' name='action'>Buscar
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

SearchFilters.propTypes = {
  onFilter: PropTypes.func
}

export default SearchFilters
