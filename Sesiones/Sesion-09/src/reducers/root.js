import { combineReducers } from 'redux'
import searcher from './searcher'
import teacher from './teacher'

const rootReducer = combineReducers({
  searcher,
  teacher
})

export default rootReducer
