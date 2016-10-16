import React from 'react'

const TeacherDescription = ({ avatar, description }) => (
  <div className='container'>
    <div className='row'>
      <img className='col s3 responsive-img' src={avatar} />
      <p className='flow-text'>
        {description}
      </p>
    </div>
  </div>
)

export default TeacherDescription
