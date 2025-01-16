import React, { useState, useEffect, useContext } from 'react'
import FileUploadBox from "./FileUploadBox"
import { ContactContext } from '../../../context/ContactProvider';

function ReferenceForm() {
    const { setFormData } = useContext(ContactContext);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    useEffect(() => {
        setFormData(prev => ({ ...prev, files: uploadedFiles }))
    }, [uploadedFiles])

    return (
        <div className='font-body'>
            <div className='text-lg font-medium mb-1'>
                <h4>4. 참고사항</h4>
            </div>
            <FileUploadBox
                id={"file1"}
                order={0}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
            />
            <FileUploadBox
                id={"file2"}
                order={1}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
            />
            <FileUploadBox
                id={"file3"}
                order={2}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
            />
        </div>
    )
}

export default ReferenceForm