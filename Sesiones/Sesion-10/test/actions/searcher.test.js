import * as actions from '../../src/actions/searcher'
import * as types from '../../src/actions/actionTypes'
import { expect } from 'chai'

describe('Searcher actions', () => {
  it('should create an action to filter a teacher', () => {
    const filter = { text: 'dani' }
    const expectedAction = {
      type: types.FILTER,
      payload: {
        text: 'dani'
      }
    }
    expect(actions.filterTeachers(filter)).to.be.eql(expectedAction)
  })
})
