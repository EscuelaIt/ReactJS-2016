import * as types from './actionTypes'

export const filterTeachers = (filter) => {
  return {
    type: types.FILTER,
    payload: {
      ...filter
    }
  }
}
