import React, { PropTypes } from 'react'
import { Header, CardList, SearchFilters } from '../components'
import { connect } from 'react-redux'

const App = ({teachers}) => (
  <div className='container'>
    <Header />
    <SearchFilters />
    <CardList teachers={teachers} />
  </div>
)

App.propTypes = {
  teachers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number
  }))
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
