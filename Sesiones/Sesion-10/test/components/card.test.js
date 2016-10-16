import { expect } from 'chai'
import { createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'
import Card from '../../src/components/card'

describe('#Card component', () => {
  it('is rendered properly', () => {
    const shallowRenderer = createRenderer()
    const card = createElement(Card)
    shallowRenderer.render(card)
    const result = shallowRenderer.getRenderOutput()
    expect(result.type).to.be.eql('div')
  })
})
