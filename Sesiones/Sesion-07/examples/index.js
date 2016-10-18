import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import './components/index.scss'

let root = document.getElementById('root')

if (!root) {
  root = document.createElement('div')
  document.body.appendChild(root)
}

ReactDom.render(<App />, root)
