import React from 'react'
import { mount, shallow } from 'enzyme'
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

  it('triggers onFilter() on every submit the form', () => {
    const onFilterSpy = sinon.spy()
    const wrapper = mount(<SearchFilters onFilter={onFilterSpy} />)

    wrapper.find('form').simulate('submit')
    expect(onFilterSpy.calledOnce).to.be.true
  })

  it('renders a link to the home page when onFilter is not provided', () => {
    const wrapper = shallow(<SearchFilters />)

    expect(wrapper.find('.brand-logo').length).to.be.eql(1)
    expect(wrapper.find('form').length).to.be.eql(0)
  })

  it('renders the filter value when provided by props', () => {
    const wrapper = shallow(<SearchFilters filter='some value' onFilter={() => {}} />)

    expect(wrapper.find('input').node.props.value).to.be.eql('some value')
  })
})
