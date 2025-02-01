import React, { useContext, useEffect, useState } from 'react'

function GridSelectBox({ isLabel, label, id, options, placeholder, context, isModifiable }) {
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
            {isLabel && (
                <label htmlFor="scope" className="block text-sm lg:text-base font-semibold text-gray-700">
                    {label}
                </label>
            )}
            <select
                id={id}
                name={id}
                value={data}
                onChange={handleChange}
                className={`block w-full border-b border-gray-300 focus:border-gray-500 focus:outline-none text-sm lg:text-base p-1 pb-1.5`}
                disabled={!isModifiable}
            >
                <option value="">{placeholder}</option>
                {options
                    .map((option, index) => (
                        <option key={index} value={option.value}>{option.content}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default GridSelectBox