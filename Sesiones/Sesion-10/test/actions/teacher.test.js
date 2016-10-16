import * as actions from '../../src/actions/teacher'
import * as types from '../../src/actions/actionTypes'
import { expect } from 'chai'

describe('Teacher actions', () => {
  it('should create an action to request a teacher', () => {
    const id = '1'
    const expectedAction = {
      type: types.REQUEST_TEACHER,
      payload: {
        id
      }
    }
    expect(actions.requestTeacher(id)).to.be.eql(expectedAction)
  })
})
