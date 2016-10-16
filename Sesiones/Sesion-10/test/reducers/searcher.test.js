import { expect } from 'chai'
import searcherReducer from '../../src/reducers/searcher'
import { fetchTeachers } from '../../src/actions/searcher'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../src/actions/actionTypes'
import TeacherRepository from '../../src/repositories/teacher'
import sinon from 'sinon'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('#searcher reducer', () => {
  it('returns the default state when there is no action to hanle', () => {
    const teachers = []
    const action = {}
    expect(searcherReducer(teachers, action)).to.be.eql(teachers)
  })

  it('creates FETCH_TEACHERS_SUCCESS when fetching teachers has been done', () => {
    const expectedTeachers = [{ some: 'teacher' }]

    sinon.stub(TeacherRepository.prototype, 'fetch', () => Promise.resolve(expectedTeachers))

    const expectedActions = [
      { type: types.FETCH_TEACHERS_REQUEST },
      { type: types.FETCH_TEACHERS_SUCCESS, payload: { teachers: expectedTeachers } }
    ]

    const store = mockStore({ teachers: [] })

    return store.dispatch(fetchTeachers())
      .then(() => {
        expect(store.getActions()).to.be.eql(expectedActions)
      })
  })
})
