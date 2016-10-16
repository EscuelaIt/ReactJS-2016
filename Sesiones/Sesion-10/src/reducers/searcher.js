import * as types from '../actions/actionTypes'

const searcher = (state = { teachers: [] }, action) => {
  switch (action.type) {
    case types.FETCH_TEACHERS_REQUEST:
      return {
        ...state,
        fetchingTeachers: true
      }
    case types.FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        fetchingTeachers: false,
        ...action.payload
      }
    case types.FETCH_TEACHERS_FAILURE:
      return {
        ...state,
        fetchingTeachers: false,
        showError: true
      }
    default:
      return state
  }
}

export default searcher
