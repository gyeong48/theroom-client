import React, { useEffect, useState } from 'react'
import TextareaAutosize from "react-textarea-autosize";
import { getContents } from '../../api/contentApi';


function ContentForm({ type }) {
    const [contents, setContents] = useState([]);
    const [isModifiable, setIsModifiable] = useState();

    useEffect(() => {
        getContents(type).then(res => {
            console.log(res.data);
            setContents(res.data);
        })
    }, [type])


    const handleChange = (e, index) => {
        const newContents = [...contents];
        newContents[index].str = e.target.value;
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
        setContents(prev => [...prev, { id: null, str: "" }])
    }

    const handleModify = (e) => {
        e.preventDefault();
        setIsModifiable(true);
    }

    if (!contents) return <p>로딩 중...</p>;

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
                            value={c.str}
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