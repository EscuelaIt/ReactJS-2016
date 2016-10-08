import React from 'react'
import { Header, CardList, SearchFilters } from '../components'
import teachers from '../data'

const App = () => (
  <div className='container'>
    <Header />
    <SearchFilters />
    <CardList teachers={teachers} />
  </div>
)

export default App
