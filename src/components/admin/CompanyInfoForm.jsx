import React, { useState, useContext } from 'react'
import GridInputBox from '../common/GridInputBox';
import AddressBox from '../common/AddressBox';
import { CompanyInfoContext } from '../../context/CompanyInfoProvider';

function CompanyInfoForm() {
    const context = CompanyInfoContext;
    const { formData } = useContext(context);
    const [isModifiable, setIsModifiable] = useState(false);

    const handleModify = (e) => {
        e.preventDefault();
        setIsModifiable(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsModifiable(false);
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-8 p-6 mt-6">
            <form className="pt-10 space-y-14 bg-white p-6">
                <GridInputBox
                    label={"대표자"}
                    id={"name"}
                    type={"text"}
                    placeholder={"이름"}
                    context={context}
                    isModifiable={isModifiable}
                />
                <GridInputBox
                    label={"이메일"}
                    id={"email"}
                    type={"email"}
                    placeholder={"이메일"}
                    context={context}
                    isModifiable={isModifiable}
                />
                <GridInputBox
                    label={"연락처"}
                    id={"phoneNumber"}
                    type={"text"}
                    placeholder={"연락처"}
                    context={context}
                    isModifiable={isModifiable}
                />

                {/* 주소 검색 */}
                <AddressBox context={context} isModifiable={isModifiable} />

                <div className='flex justify-center items-center'>
                    {isModifiable ?
                        <button
                            onClick={handleSubmit}
                            className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-green-400 hover:opacity-75 text-white rounded-md'
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
            </form>
        </div>
    )
}

export default CompanyInfoForm