import * as types from '../actions/actionTypes'

const applyFilter = (name, filter) => {
  return name.toLowerCase().includes(filter.toLowerCase())
}

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
    case types.FILTER:
      return {
        filter: action.payload.text,
        teachers: state.teachers.filter(t => applyFilter(t.name, action.payload.text))
      }
    default:
      return state
  }
}

export default searcher
