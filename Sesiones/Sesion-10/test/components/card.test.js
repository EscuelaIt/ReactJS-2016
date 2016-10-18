import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Card from '../../src/components/card'

describe('<Card />', () => {
  it('is rendered properly', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper.node.type).to.be.eql('div')
  })
})
