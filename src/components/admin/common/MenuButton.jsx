import React from 'react'

function MenuButton({src, menu}) {
    return (
        <div className='flex space-x-1 text-black hover:text-gray-500 cursor-pointer font-bold text-base'>
            <img className='w-8' src={src} alt='no image' />
            <button>{menu}</button>
        </div>
    )
}

export default MenuButton