import React, { useRef, useState } from 'react'

function FileUploadBox({ order, id, uploadedFiles, setUploadedFiles }) {
    const [option, setOption] = useState("");
    const [filename, setFilename] = useState(null)
    const filenameRef = useRef(null);

    const handleOptionChange = (e) => {
        const newOption = e.target.value;

        if (newOption === "") {
            removeFile();
        } else {
            setUploadedFiles((prev) => prev.map((file) => file.id === order ? { ...file, subject: newOption } : file));
        }

        setOption(newOption);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const newUploadedFiles = [...uploadedFiles];

        if (!file) {
            removeFile();
            return;
        }

        const foundFile = newUploadedFiles.find((f) => f.id === order);

        if (foundFile) {
            foundFile.name = file.name;
            foundFile.type = file.type;
            foundFile.size = file.size;
            foundFile.subject = option;
        } else {
            newUploadedFiles.push({
                id: order,
                name: file.name,
                type: file.type,
                size: file.size,
                subject: option
            })
        }

        setFilename(file.name);
        setUploadedFiles(newUploadedFiles);
    };

    const handleRemoveClick = (e) => {
        e.preventDefault();
        removeFile();
    }

    const removeFile = () => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== order));
        setFilename(null);

        if (filenameRef.current) {
            filenameRef.current.value = "";
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>

            {/* 셀렉트 박스 */}
            <div>
                <select
                    id={id}
                    name={id}
                    value={option}
                    onChange={handleOptionChange}
                    className="block w-full border-b border-gray-300 focus:border-gray-500 focus:outline-none text-sm lg:text-base p-1 pb-1.5"
                >
                    <option value="">
                        파일 유형 선택
                    </option>
                    <option value="BLUEPRINT">도면사진</option>
                    <option value="DESIGN">디자인참고사진</option>
                    <option value="WORKSITE">현장참고사진진</option>
                </select>
            </div>

            {/* 파일 업로드 */}
            {option && (
                <div className='flex'>
                    <input
                        id="file-upload"
                        type="file"
                        ref={filenameRef}
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-[7px] file:px-4 file:rounded file:border-0 file:text-xs lg:file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                    />
                    {filename && (
                        <button onClick={handleRemoveClick} className='pr-[2px]'>✖</button>
                    )}
                </div>
            )}
        </div>
    )
}

export default FileUploadBox