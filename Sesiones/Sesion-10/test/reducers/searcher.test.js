import { expect } from 'chai'
import searcherReducer from '../../src/reducers/searcher'
import { filterTeachers } from '../../src/actions/searcher'

describe('#searcher reducer', () => {
  it('returns the default state when there is no action to hanle', () => {
    const teachers = []
    const action = {}
    expect(searcherReducer(teachers, action)).to.be.eql(teachers)
  })

  it('returns the filtered state only with the teachers who matches the filter', () => {
    const teachers = [{
      name: 'daniel'
    }, {
      name: 'miguel'
    }]

    const action = filterTeachers({ text: 'dani' })

    const newState = searcherReducer(teachers, action)

    expect(newState.teachers.reduce(t => t)).to.have.property('name', 'Daniel de la Cruz')
  })
})
