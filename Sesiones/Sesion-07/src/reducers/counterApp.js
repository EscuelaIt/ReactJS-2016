import * as types from '../actions/actionTypes'
const initialState = {
  counter: 0
}

const counterApp = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
  }
}

export default counterApp
