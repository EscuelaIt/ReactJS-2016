import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CardList from '../../src/components/cardList'
import Card from '../../src/components/card'

const teachers = [{
  id: '1'
}, {
  id: '2'
}, {
  id: '3'
}]

describe('<CardList />', () => {
  it('renders as many Cards as teachers provided', () => {
    const wrapper = shallow(<CardList teachers={teachers}/>)
    expect(wrapper.find(Card)).to.have.length(3)
  })
})
