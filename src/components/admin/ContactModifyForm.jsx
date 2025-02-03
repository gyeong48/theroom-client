import React, { useState, useContext } from 'react'
import AddressBox from '../common/AddressBox'
import { ContactModifyContext } from '../../context/ContactModifyProvider'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';
import CheckModal from '../common/CheckModal';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const STATUS = ["CONTACT", "MEET1", "MEET2", "MEET3", "CONTRACT", "INPROGRESS", "COMPLETE", "HOLD"]

function ContactModifyForm() {
    const context = ContactModifyContext;
    const navigate = useNavigate();
    const { formData, setFormData } = useContext(context);
    const [isModifiable, setIsModifiable] = useState(false);
    const [memo, setMemo] = useState(formData["memo"]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setMemo(e.target.value)
        setFormData((prev) => ({ ...prev, memo: e.target.value }))
    }

    const handleModify = (e) => {
        e.preventDefault();
        setIsModifiable(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModifiable(false);
        console.log(formData);
        const contactModifyFormData = new FormData();

        for (const [key, value] of Object.entries(formData)) {
            contactModifyFormData.append(key, value);
        }

        for (const [key, value] of contactModifyFormData.entries()) {
            console.log(`${key} : ${value}`);
        }
    }

    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }

    const handleCheck = () => {
        //삭제 요청
        setIsModalOpen(false);
        navigate({ pathname: "../contact" });
    }

    const handleCancel = () => {
        setIsModalOpen(false);
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

            <div className='font-body'>
                <div className='text-lg font-medium mb-1'>
                    <h4>4. 진행사항</h4>
                </div>
                {/**파일 다운로드*/}

                {/**진행 상태 표시*/}

                {/**메모기입란 */}
                <div className='w-full pb-4'>
                    <label htmlFor="name" className="block text-sm lg:text-base font-semibold text-gray-700">
                        메모
                    </label>
                    <textarea
                        id={"memo"}
                        name={"memo"}
                        value={memo}
                        onChange={handleChange}
                        className={`w-full p-1 border-b border-gray-300 focus:outline-none text-sm lg:text-base placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base ${!isModifiable ? "bg-gray-100" : "bg-white"}`}
                        placeholder={"비어있음"}
                        rows={5}
                        readOnly={!isModifiable}
                    />
                </div>
            </div>

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
                            onClick={handleOpenModal}
                            className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-red-400 hover:opacity-75 text-white rounded-md'
                        >
                            삭제
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
            {isModalOpen &&
                <CheckModal
                    title={"확인: 견적문의 삭제"}
                    content={"현재 문의 건을 삭제하시겠습니까?"}
                    checkFn={handleCheck}
                    cancelFn={handleCancel}
                />
            }
        </form>
    )
}

export default ContactModifyForm