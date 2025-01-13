import React from 'react'
import { Link } from 'react-router-dom'

function ImageCard({ id, url, title }) {
  return (
    <Link to={`/portfolio/${id}`}>
      <div className='hover:opacity-75 hover:cursor-pointer hover:scale-95 transition-transform'>
        <img src={`${url}`} alt='no images'></img>
        <p className='text-center font-body'>{title}</p>
      </div>
    </Link>
  )
}

export default ImageCard