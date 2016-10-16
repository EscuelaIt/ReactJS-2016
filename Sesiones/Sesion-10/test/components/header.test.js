import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Header from '../../src/components/header'

describe('<Header />', () => {
  it('renders the title with the proper styles', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').hasClass('header center orange-text')).to.be.true
  })
})
