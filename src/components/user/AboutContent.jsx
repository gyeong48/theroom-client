import React from 'react'
import Location from './Location'

function AboutContent() {
    const introduce = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.`

    const companyInfo = [
        { title: "대표자", content: "이지환" },
        { title: "주소", content: "서울시 송파구 장지동 송파파인타운1단지 301호" },
        { title: "이메일", content: "example@example.com" },
        { title: "연락처", content: "010-0000-0000" },
    ]

    return (
        <div>
            <div className='pt-10'>
                <p className="text-center font-body">
                    {introduce}
                </p>
            </div>
            <Location />
            <div className='pt-10'>
                <ul>
                    {companyInfo.map((info, index) => (
                        <li key={index} className='mt-4 block sm:flex sm:flex-wrap max-[400px]:text-sm md:text-base'>
                            <span className='sm:w-1/3 sm:mb-0 block mb-1 font-body font-semibold'>{info.title}</span>
                            <span className='sm:w-2/3 block font-body'>{info.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutContent