import React from 'react'
import MenuButton from './MenuButton'

function DropDownMenu({ src, menu }) {
    return (
        <div className="group relative text-black hover:text-gray-500 cursor-pointer font-bold text-base uppercase">
            <MenuButton src={src} menu={menu} />
            <div className="group-hover:block absolute top-12 hidden h-auto">
                <ul className="bg-white shadow px-6 py-8">
                    <li className="py-1"><a className="block text-black hover:text-gray-500 font-bold text-base uppercase  cursor-pointer">Item</a></li>
                    <li className="py-1"><a className="block text-black hover:text-gray-500 font-bold text-base uppercase  cursor-pointer">Item 2</a></li>
                    <li className="py-1"><a className="block text-black hover:text-gray-500 font-bold text-base uppercase  cursor-pointer">Item 3</a></li>
                    <li className="py-1"><a className="block text-black hover:text-gray-500 font-bold text-base uppercase  cursor-pointer">Item 4</a></li>
                    <li className="py-1"><a className="block text-black hover:text-gray-500 font-bold text-base uppercase  cursor-pointer">Item 5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu