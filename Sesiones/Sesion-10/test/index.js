import React from 'react'
import App from '../src'
import { expect } from 'chai'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('is initialized correctly', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.length).to.be.eql(1)
  })
})
