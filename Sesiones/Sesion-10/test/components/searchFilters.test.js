import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import SearchFilters from '../../src/components/searchFilters'

describe('<SearchFilters />', () => {
  it('triggers onFilter() on every input change', () => {
    const onFilterSpy = sinon.spy()
    const wrapper = mount(<SearchFilters onFilter={onFilterSpy} />)

    wrapper.find('input').simulate('change')
    expect(onFilterSpy.calledOnce).to.be.true
  })
})
