import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import root from '../../src/reducers/root'
import renderFullPage from '../views/renderFullPage'
import { match, RouterContext } from 'react-router'
import routes from '../../src/routes'
import { Provider } from 'react-redux'

function handleRender (req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      req.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let store = createStore(root)

      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )

      const preloadedState = store.getState()

      res.status(200).send(renderFullPage(html, preloadedState))
    } else {
      res.status(404).send('Not found')
    }
  })
}

export default handleRender
