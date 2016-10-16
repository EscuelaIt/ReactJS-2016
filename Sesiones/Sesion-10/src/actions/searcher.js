import * as types from './actionTypes'
import teachers from '../data'

const fetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(teachers)
    }, 1000)
  })
}

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

    fetch()
      .then(teachers => dispatch(fetchTeachersSuccess(teachers)))
      .catch(err => dispatch(fetchTeachersFailure(err)))
  }
}

export const filterTeachers = (filter) => {
  return {
    type: types.FILTER,
    payload: {
      ...filter
    }
  }
}
