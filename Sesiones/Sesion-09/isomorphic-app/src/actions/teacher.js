import * as types from './actionTypes'

export const requestTeacher = (id) => {
  return {
    type: types.REQUEST_TEACHER,
    payload: {
      id
    }
  }
}
