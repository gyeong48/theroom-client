import React, { useState } from 'react'
import ResultModal from '../common/ResultModal';

const initImages = [
    { name: "test1.png", filename: "test1.png", size: 1024 * 1024 },
    { name: "test2.png", filename: "test2.png", size: 1024 * 1024 },
    { name: "test3.png", filename: "test3.png", size: 1024 * 1024 },
    { name: "test4.png", filename: "test4.png", size: 1024 * 1024 },
    { name: "test5.png", filename: "test5.png", size: 1024 * 1024 },
    { name: "test6.png", filename: "test6.png", size: 1024 * 1024 },
    { name: "test7.png", filename: "test7.png", size: 1024 * 1024 },
]

function MainImageUploadForm() {
    const MAX_SIZE = 100 * 1024 * 1024;
    const [imageFiles, setImageFiles] = useState(initImages);
    const [totalFileSize, setTotalFileSize] = useState(Array.from(initImages).reduce((acc, file) => acc + file.size, 0));
    const [isModifiable, setIsModifiable] = useState(false);
    const [isOutOfSize, setIsOutOfSize] = useState(false);

    const handleFileChange = (e) => {
        const prevSize = Array.from(imageFiles).reduce((acc, file) => acc + file.size, 0);
        const currentSize = Array.from(e.target.files).reduce((acc, file) => acc + file.size, 0);
        console.log(currentSize);

        if (prevSize + currentSize > MAX_SIZE) {
            setIsOutOfSize(true);
            return;
        }

        setImageFiles((prev) => [...prev, ...e.target.files])
        setTotalFileSize(prevSize + currentSize);
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

    const handleCloseModal = (e) => {
        e.preventDefault();
        setIsOutOfSize(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('files', imageFiles[i]);
        }

        console.log(imageFiles);
        

        setIsModifiable(false);
    }

    const handleModify = (e) => {
        e.preventDefault();
        setIsModifiable(true);
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-8 p-6 mt-6">
            <div>
                <div className='mb-2 flex items-center justify-end font-body font-semibold text-sm space-x-4'>
                    <div>파일: {imageFiles.length}개</div>
                    <div>용량: {Math.ceil(totalFileSize / 1024 / 1024)}MB/100MB</div>
                    <button onClick={handleRemoveImageFileAll} disabled={!isModifiable} >전체삭제</button>
                </div>

                <div className='w-full h-64 p-2 border block rounded-md overflow-auto'>
                    {imageFiles && imageFiles.map((file, index) => (
                        <div key={index} className='mb-1 p-1 border-b flex justify-between items-center text-sm lg:text-base'>
                            <div>{file.name}</div>
                            <button onClick={(e) => handleRemoveImageFile(e, index)} disabled={!isModifiable} >✖</button>
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
                        disabled={!isModifiable}
                    />
                </label>
            </div>

            <div className='mt-4 flex justify-center items-center'>
                {isModifiable ?
                    <button
                        onClick={handleSubmit}
                        className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-black hover:opacity-75 text-white rounded-md'
                    >
                        저장
                    </button>
                    :
                    <button
                        onClick={handleModify}
                        className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-black hover:opacity-75 text-white rounded-md'
                    >
                        수정
                    </button>
                }
            </div>

            {isOutOfSize &&
                <ResultModal
                    title={"경고: 파일 용량 초과"}
                    content={`전체 파일 용량은 ${MAX_SIZE / 1024 / 1024}MB를 초과할 수 없습니다.`}
                    callbackFn={(e) => handleCloseModal(e)}
                />
            }
        </div>
    )
}

export default MainImageUploadForm