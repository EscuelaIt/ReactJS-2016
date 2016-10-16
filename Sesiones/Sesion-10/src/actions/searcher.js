import * as types from './actionTypes'
import TeacherRepository from '../repositories/teacher'

const repository = new TeacherRepository()

const fetchTeachersRequest = () => {
  return {
    type: types.FETCH_TEACHERS_REQUEST
  }
}

const fetchTeachersFailure = (err) => {
  return {
    type: types.FETCH_TEACHERS_FAILURE,
    payload: {
      err
    },
    error: true
  }
}

const fetchTeachersSuccess = (teachers) => {
  return {
    type: types.FETCH_TEACHERS_SUCCESS,
    payload: {
      teachers
    }
  }
}

export const fetchTeachers = () => {
  return dispatch => {
    dispatch(fetchTeachersRequest())

    repository.fetch()
      .then(teachers => dispatch(fetchTeachersSuccess(teachers)))
      .catch(err => dispatch(fetchTeachersFailure(err)))
  }
}

export const filterTeachers = (filter) => {
  return dispatch => {
    dispatch(fetchTeachersRequest())

    repository.filter(filter)
      .then(teachers => dispatch(fetchTeachersSuccess(teachers)))
      .catch(err => dispatch(fetchTeachersFailure(err)))
  }
}
