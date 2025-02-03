import React, { useState } from 'react'
import TextareaAutosize from "react-textarea-autosize";

const savedContents = {
    about: [
        {
            id: 6,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
        },
    ],
    service: [
        {
            id: 1,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
        },
        {
            id: 2,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
        },
        {
            id: 3,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
        },
        {
            id: 4,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`
        }
    ]
}

function ContentForm({ type }) {
    const [contents, setContents] = useState(savedContents[type]);
    const [isModifiable, setIsModifiable] = useState();

    const handleChange = (e, index) => {
        const newContents = [...contents];
        newContents[index].content = e.target.value;
        setContents(newContents);
    };

    const handleRemoveContent = (e, index) => {
        e.preventDefault();
        setContents(prev => prev.filter((_, i) => index !== i));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contents);
        setIsModifiable(false);
    }

    const handleAddContent = (e) => {
        e.preventDefault();
        setContents(prev => [...prev, { id: null, content: "" }])
    }

    const handleModify = (e) => {
        e.preventDefault();
        setIsModifiable(true);
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {contents && contents.map((c, index) => (
                <div key={index} className='mb-4 border-b flex justify-between items-center text-sm lg:text-base'>
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="name" className="block text-sm lg:text-base font-semibold text-gray-700">
                                {`content${index + 1}`}
                            </label>
                            {isModifiable &&
                                <button
                                    className="block text-xs lg:text-sm font-semibold text-gray-700"
                                    onClick={(e) => handleRemoveContent(e, index)}
                                    disabled={!isModifiable}
                                >
                                    삭제
                                </button>
                            }
                        </div>

                        <TextareaAutosize
                            value={c.content}
                            onChange={(e) => handleChange(e, index)}
                            className={`w-full p-1 border-b border-gray-300 focus:outline-none text-sm lg:text-base placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base ${!isModifiable ? "bg-gray-100" : "bg-white"} resize-none`}
                            minRows={1}
                            placeholder="내용을 입력하세요."
                            readOnly={!isModifiable}
                        />
                    </div>
                </div>
            ))}


            <div className='flex justify-center items-center'>
                {isModifiable ?
                    <div className='flex justify-center space-x-6'>
                        <button
                            onClick={handleSubmit}
                            className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-black hover:opacity-75 text-white rounded-md'
                        >
                            저장
                        </button>
                        <button
                            onClick={handleAddContent}
                            className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-green-400 hover:opacity-75 text-white rounded-md'
                        >
                            추가
                        </button>
                    </div>
                    :
                    <button
                        onClick={handleModify}
                        className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-black hover:opacity-75 text-white rounded-md'
                    >
                        수정
                    </button>
                }
            </div>
        </div>
    )
}

export default ContentForm