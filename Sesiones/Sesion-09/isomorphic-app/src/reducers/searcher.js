import teachers from '../data'
import * as types from '../actions/actionTypes'

const applyFilter = (name, filter) => {
  return name.toLowerCase().includes(filter.toLowerCase())
}

const searcher = (state = {teachers}, action) => {
  switch (action.type) {
    case types.FILTER:
      return {
        filter: action.payload.text,
        teachers: teachers.filter(t => applyFilter(t.name, action.payload.text))
      }
    default:
      return state
  }
}

export default searcher
