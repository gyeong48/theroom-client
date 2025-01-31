import React, { useContext, useEffect, useState } from 'react'

function GridInputBox({ label, id, type, placeholder, context }) {
    const { formData, setFormData } = useContext(context)
    const [data, setData] = useState(formData[id]);

    useEffect(() => {
        setFormData(prev => ({ ...prev, [id]: data }))
    }, [data])

    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div>
            <label htmlFor="name" className="block text-sm lg:text-base font-semibold text-gray-700">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={data}
                onChange={handleChange}
                className="w-full p-1 border-b border-gray-300 focus:border-gray-500 focus:outline-none placeholder:text-sm lg:placeholder:text-base"
                placeholder={placeholder}
            />
        </div>
    )
}

export default GridInputBox