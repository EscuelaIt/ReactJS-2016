import React, { Component, PropTypes } from 'react'
import { TeacherTitle, TeacherDescription } from '../components'
import { connect } from 'react-redux'
import { requestTeacher } from '../actions/teacher'

class Teacher extends Component {
  componentDidMount () {
    this.props.onRequestTeacher(this.props.id)
  }

  render () {
    return (
      <div>
        <TeacherTitle {...this.props} />
        <TeacherDescription {...this.props} />
      </div>
    )
  }
}

Teacher.propTypes = {
  onRequestTeacher: PropTypes.func,
  id: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps.params,
    ...state.teacher,
    id: ownProps.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestTeacher: (id) => dispatch(requestTeacher(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teacher)
