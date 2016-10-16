import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import SearchFilters from '../../src/components/searchFilters'

describe('<SearchFilters />', () => {
  xit('triggers onFilter() on every key press', () => {
    const callback = () => {}
    const onFilterSpy = sinon.spy(callback)
    const wrapper = shallow(<SearchFilters onFilter={callback} />)

    wrapper.find('input').simulate('change')
    expect(onFilterSpy).to.have.property('callCount', 1)
  })
})
