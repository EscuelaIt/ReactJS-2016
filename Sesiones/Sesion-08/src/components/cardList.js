import React from 'react'
import Card from './card'

const CardList = ({teachers}) => (
  <div className='container'>
    {teachers.map(teacher => <Card {...teacher} />)}
  </div>
)

export default CardList
