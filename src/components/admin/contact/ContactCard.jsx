import React, { useState } from 'react'

function ContactCard({ items }) {
    const [isModifiable, setIsModifiable] = useState(false);
    const [memo, setMemo] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste!")

    const handleChange = (e) => {
        setMemo(e.target.value)
    }

    const handleModify = () => {
        setIsModifiable(true);
    }

    const handleSubmit = () => {
        setIsModifiable(false);
        console.log(memo);
    }

    return (
        <div className='pb-6 md:p-2 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4'>
            <div className='border border-solid rounded-md shadow-lg w-full px-4 pt-4 bg-white'>
                {/**견적기본정본 */}
                {items.map((item, index) => (
                    <div key={index} className='w-full pb-4'>
                        <label htmlFor="name" className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                            {item.label}
                        </label>
                        <div className="w-full p-1 border-b border-gray-300 text-xs md:text-sm lg:text-base">
                            {item.content}
                        </div>
                    </div>
                ))}

                {/**메모기입란 */}
                <div className='w-full pb-4'>
                    <label htmlFor="name" className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                        메모
                    </label>
                    <textarea
                        id={"memo"}
                        name={"memo"}
                        value={memo}
                        onChange={handleChange}
                        className={`w-full p-1 border-b border-gray-300 focus:outline-none text-xs md:text-sm lg:text-base placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base ${!isModifiable ? "bg-gray-100" : "bg-white"}`}
                        placeholder={"비어있음"}
                        rows={5}
                        readOnly={!isModifiable}
                    />

                    <div className='flex justify-center items-center'>
                        {isModifiable ?
                            <button onClick={handleSubmit} className='px-3 py-1 bg-black text-xs md:text-sm text-white rounded-md hover:opacity-75 focus:outline-none'>
                                저장
                            </button>
                            :
                            <button onClick={handleModify} className='px-3 py-1 bg-black text-xs md:text-sm text-white rounded-md hover:opacity-75 focus:outline-none'>
                                메모수정
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard