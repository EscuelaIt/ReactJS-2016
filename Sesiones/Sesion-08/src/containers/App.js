import React, { PropTypes } from 'react'
import { Header, CardList, SearchFilters } from '../components'
import { connect } from 'react-redux'
import { filterTeachers } from '../actions/filterTeachers'

const App = ({ onFilter, teachers, filter }) => (
  <div className='container'>
    <Header />
    <SearchFilters filter={filter} onFilter={onFilter} />
    <CardList teachers={teachers} />
  </div>
)

App.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
  teachers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
  }))
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps.params,
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filter) => dispatch(filterTeachers(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
