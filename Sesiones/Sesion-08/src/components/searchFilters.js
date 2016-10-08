import React from 'react'

const SearchFilters = () => (
  <div className='container'>
    <div className='row'>
      <form className='col s12'>
        <div className='input-field col s6'>
          <input id='teacher_name' type='text' className='validate' />
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

export default SearchFilters
