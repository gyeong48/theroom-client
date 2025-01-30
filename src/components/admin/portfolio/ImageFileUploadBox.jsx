import React, { useEffect, useState } from 'react'

function ImageFileUploadBox({ context }) {
    const [imagefiles, setImageFiles] = useState([]);
    const [totalFileSize, setTotalFileSize] = useState(0)

    const handleFileChange = (e) => {
        e.preventDefault();
        setImageFiles((prev) => [...prev, ...e.target.files])
    }

    const handleRemoveImageFile = (e, index) => {
        e.preventDefault();
        setImageFiles((prev) => prev.filter((_, i) => index !== i));
    }

    const handleRemoveImageFileAll = (e) => {
        e.preventDefault();
        setImageFiles([]);
        setTotalFileSize(0);
    }

    useEffect(() => {
        setTotalFileSize(Array.from(imagefiles).reduce((acc, file) => acc + file.size, 0))
    }, [imagefiles])

    return (
        <div>
            <div className='mb-2 flex items-center justify-end font-body font-semibold text-sm space-x-4'>
                <div>파일: {imagefiles.length}개</div>
                <div>용량: {Math.ceil(totalFileSize / 1024 / 1024)}MB/100MB</div>
                <button onClick={handleRemoveImageFileAll}>전체삭제</button>
            </div>

            <div className='w-full h-64 p-2 border block rounded-md overflow-auto'>
                {imagefiles && imagefiles.map((file, index) => (
                    <div key={index} className='mb-1 p-1 border-b flex justify-between items-center text-sm lg:text-base'>
                        <div>{file.name}</div>
                        <button onClick={(e) => handleRemoveImageFile(e, index)}>✖</button>
                    </div>
                ))}
            </div>
            <label className='block w-full border rounded-md'>
                <div className='flex items-center hover:cursor-pointer pb-1'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16v-8m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                        />
                    </svg>
                    <div className='ml-2 mt-2 font-body font-semibold text-gray-600'>이미지를 선택해 주세요.</div>
                </div>
                <input
                    type="file"
                    multiple={true}
                    className='hidden'
                    onChange={handleFileChange}
                />
            </label>
        </div>
    )
}

export default ImageFileUploadBox