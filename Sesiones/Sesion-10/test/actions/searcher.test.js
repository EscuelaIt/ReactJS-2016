import * as actions from '../../src/actions/searcher'
import { expect } from 'chai'

describe('Searcher actions', () => {
  it('should create an action to filter a teacher', () => {
    const filter = { text: 'dani' }
    expect(actions.filterTeachers(filter)).to.be.a('function')
  })
})
