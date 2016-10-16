import React, { Component, PropTypes } from 'react'
import { CardList, SearchFilters } from '../components'
import { connect } from 'react-redux'
import { fetchTeachers, filterTeachers } from '../actions/searcher'

class Searcher extends Component {
  componentDidMount () {
    if (!this.props.teachers.length) {
      this.props.onComponentDidMount()
    }

    if (this.props.filter) {
      this.props.onFilter({
        text: this.props.filter
      })
    }
  }

  render () {
    return (
      <div>
        <SearchFilters filter={this.props.filter} onFilter={this.props.onFilter} />
        <div className='container'>
          {
            this.props.fetchingTeachers
              ? <h3>Fething teachers...</h3>
              : <CardList teachers={this.props.teachers} />
          }
        </div>
      </div>
    )
  }
}

Searcher.propTypes = {
  fetchingTeachers: PropTypes.bool,
  filter: PropTypes.string,
  onFilter: PropTypes.func,
  onComponentDidMount: PropTypes.func,
  teachers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
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
    onComponentDidMount: () => dispatch(fetchTeachers()),
    onFilter: (filter) => dispatch(filterTeachers(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searcher)
