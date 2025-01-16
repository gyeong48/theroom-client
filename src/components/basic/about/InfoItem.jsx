import React from 'react'

function InfoItem({title, content}) {
    return (
        <li className='mt-4 block sm:flex sm:flex-wrap max-[400px]:text-sm md:text-base'>
            <span className='sm:w-1/3 sm:mb-0 block mb-1 font-body font-semibold'>{title}</span>
            <span className='sm:w-2/3 block font-body'>{content}</span>
        </li>
    )
}

export default InfoItem