import React, { useState, useContext } from 'react'
import AddressBox from '../portfolio/AddressBox'
import { ContactModifyContext } from '../../../context/ContactModifyProvider'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';

function ContactModifyForm() {
    const context = ContactModifyContext;
    const { formData } = useContext(context);
    const [isModifiable, setIsModifiable] = useState(false);
    const [memo, setMemo] = useState(formData["memo"])

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
        <form className="pt-10 space-y-14">
            <div className='font-body'>
                <div className='text-lg font-medium mb-1'>
                    <h4>1. 고객정보 <small>(필수*)</small></h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:space-x-4 lg:space-y-0 space-y-2'>
                    <GridInputBox
                        label={"이름"}
                        id={"name"}
                        type={"text"}
                        placeholder={"이름을 입력해주세요"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                    <GridInputBox
                        label={"이메일"}
                        id={"email"}
                        type={"email"}
                        placeholder={"이메일을 입력해주세요"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                    <GridInputBox
                        label={"연락처"}
                        id={"phoneNumber"}
                        type={"text"}
                        placeholder={"연락처를 입력해주세요"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                </div>
            </div>

            <div className='font-body '>
                <div className='text-lg font-medium mb-1'>
                    <h4>2. 건물정보 <small>(필수*)</small></h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                    <GridSelectBox
                        isLabel={true}
                        label={"유형"}
                        id={"type"}
                        options={[{ value: "APARTMENT", content: "아파트" }, { value: "SMALLAPARTMENT", content: "빌라" }, { value: "HOUSE", content: "주택" }]}
                        placeholder={"선택"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                    <GridInputBox
                        label={"면적"}
                        id={"exclusiveArea"}
                        type={"number"}
                        placeholder={"분양 면적을 입력해주세요 - 단위: 평"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                </div>

                {/* 주소 검색 */}
                <AddressBox context={context} isModifiable={isModifiable} />
            </div>

            <div className='font-body'>
                <div className='text-lg font-medium mb-1'>
                    <h4>3. 공사정보</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                    <GridInputBox
                        label={"공사예정일"}
                        id={"startDate"}
                        type={"date"}
                        placeholder={null}
                        context={context}
                        isModifiable={isModifiable}
                    />
                    <GridInputBox
                        label={"입주예정일"}
                        id={"moveInDate"}
                        type={"date"}
                        placeholder={null}
                        context={context}
                        isModifiable={isModifiable}
                    />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                    <GridInputBox
                        label={"공사예산"}
                        id={"budget"}
                        type={"number"}
                        placeholder={"단위: 만원"}
                        context={context}
                        isModifiable={isModifiable}
                    />
                    <GridSelectBox
                        isLabel={true}
                        label={"공사범위"}
                        id={"scope"}
                        placeholder={"선택"}
                        options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
                        context={context}
                        isModifiable={isModifiable}
                    />
                </div>
            </div>

            {/**파일 다운로드*/}

            {/**진행 상태 표시*/}

            {/**메모기입란 */}
            <div className='w-full pb-4'>
                <label htmlFor="name" className="block text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                    메모
                </label>
                <textarea
                    id={"memo"}
                    name={"memo"}
                    value={formData.memo}
                    onChange={handleChange}
                    className={`w-full p-1 border-b border-gray-300 focus:outline-none text-xs md:text-sm lg:text-base placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base ${!isModifiable ? "bg-gray-100" : "bg-white"}`}
                    placeholder={"비어있음"}
                    rows={5}
                    readOnly={!isModifiable}
                />
            </div>


            <div className='flex justify-center items-center'>
                {isModifiable ?
                    <button onClick={handleSubmit} className='px-3 py-1 bg-black text-xs md:text-sm text-white rounded-md hover:opacity-75 focus:outline-none'>
                        저장
                    </button>
                    :
                    <button onClick={handleModify} className='px-3 py-1 bg-black text-xs md:text-sm text-white rounded-md hover:opacity-75 focus:outline-none'>
                        수정
                    </button>
                }
            </div>
        </form>
    )
}

export default ContactModifyForm