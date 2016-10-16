import { expect } from 'chai'
import searcherReducer from '../../src/reducers/searcher'

describe('#searcher reducer', () => {
  it('returns the default state when there is no action to hanle', () => {
    const teachers = []
    const action = {}
    expect(searcherReducer(teachers, action)).to.be.eql(teachers)
  })
})
