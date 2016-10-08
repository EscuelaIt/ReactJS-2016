import React from 'react'
import { Header, CardList, SearchFilters } from '../components'

const App = () => (
  <div className='container'>
    <Header />
    <SearchFilters />
    <CardList />
  </div>
)

export default App
