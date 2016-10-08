import * as types from '../actions/actionTypes'
import teachers from '../data'

const teacher = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_TEACHER:
      return teachers.filter(t => t.id === action.payload.id).reduce(t => t)
    default:
      return state
  }
}
export default teacher
