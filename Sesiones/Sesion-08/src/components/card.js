import React, { PropTypes } from 'react'

const Card = ({name, description, id}) => (
  <div className='col s12 m7'>
    <div className='card horizontal'>
      <div className='card-image'>
        <img src='http://lorempixel.com/100/190/nature/6' />
      </div>
      <div className='card-stacked'>
        <div className='card-content'>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <a href={`/teacher/${id}`}>Ir a la página del profesor</a>
        </div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number
}

export default Card
