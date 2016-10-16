import { expect } from 'chai'
import { createElement } from 'react'
import { createRenderer, renderIntoDocument, Simulate } from 'react-addons-test-utils'
import Card from '../../src/components/card'

describe('#Card component', () => {
  it('is rendered properly', () => {
    const shallowRenderer = createRenderer()
    const card = createElement(Card)
    shallowRenderer.render(card)
    const result = shallowRenderer.getRenderOutput()
    expect(result.type).to.be.eql('div')
  })

  it('link', () => {
    const shallowRenderer = createRenderer()
    const card = createElement(Card)
    shallowRenderer.render(card)
    const result = shallowRenderer.getRenderOutput()
    const node = renderIntoDocument(result)
    Simulate.click(node)
  })
})
