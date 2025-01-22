import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainTitle({ content }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: "./add" })
  }

  return (
    <div className='flex justify-between px-7'>
      <div className='text-3xl font-bold'>{content}</div>
      <button onClick={handleClick} className='px-6 py-2 bg-black text-white rounded-md hover:opacity-75 focus:outline-none'>
        등록
      </button>
    </div>
  )
}

export default MainTitle