import React, { Component, PropTypes } from 'react'
import { Header, CardList, SearchFilters } from '../components'
import { connect } from 'react-redux'
import { filterTeachers } from '../actions/searcher'

class Searcher extends Component {
  componentDidMount () {
    if (this.props.filter) {
      this.props.onFilter({
        text: this.props.filter
      })
    }
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <SearchFilters filter={this.props.filter} onFilter={this.props.onFilter} />
        <CardList teachers={this.props.teachers} />
      </div>
    )
  }
}

Searcher.propTypes = {
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
    ...state.searcher
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
)(Searcher)
