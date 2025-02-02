import React, { useContext } from 'react'
import GridInputBox from '../common/GridInputBox'
import GridSelectBox from '../common/GridSelectBox'
import AddressBox from '../common/AddressBox'
import ReferenceForm from './ReferenceForm'
import { ContactAddContext } from '../../context/ContactAddProvider'
import PersonalInformationForm from './PersonalInformationForm'

function ContactAddForm() {
    const context = ContactAddContext;
    const { formData } = useContext(context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const contactFormData = new FormData();

        for (const [key, value] of Object.entries(formData)) {
            contactFormData.append(key, value);
        }

        for (const [key, value] of contactFormData.entries()) {
            console.log(`${key} : ${value}`);
        }
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
                        isModifiable={true}
                    />
                    <GridInputBox
                        label={"이메일"}
                        id={"email"}
                        type={"email"}
                        placeholder={"이메일을 입력해주세요"}
                        context={context}
                        isModifiable={true}
                    />
                    <GridInputBox
                        label={"연락처"}
                        id={"phoneNumber"}
                        type={"text"}
                        placeholder={"연락처를 입력해주세요"}
                        context={context}
                        isModifiable={true}
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
                        isModifiable={true}
                    />
                    <GridInputBox
                        label={"면적"}
                        id={"exclusiveArea"}
                        type={"number"}
                        placeholder={"분양 면적을 입력해주세요 - 단위: 평"}
                        context={context}
                        isModifiable={true}
                    />
                </div>

                {/* 주소 검색 */}
                <AddressBox context={context} isModifiable={true} />
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
                        isModifiable={true}
                    />
                    <GridInputBox
                        label={"입주예정일"}
                        id={"moveInDate"}
                        type={"date"}
                        placeholder={null}
                        context={context}
                        isModifiable={true}
                    />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                    <GridInputBox
                        label={"공사예산"}
                        id={"budget"}
                        type={"number"}
                        placeholder={"단위: 만원"}
                        context={context}
                        isModifiable={true}
                    />
                    <GridSelectBox
                        isLabel={true}
                        label={"공사범위"}
                        id={"scope"}
                        placeholder={"선택"}
                        options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
                        context={context}
                        isModifiable={true}
                    />
                </div>
                <div className='space-y-2'>
                    <div className='border border-gray-500 bg-gray-50 rounded-md p-2'>
                        <p className='text-sm lg:text-base mb-1'>전체시공</p>
                        <p className='text-xs lg:text-sm'>철거공사, 목공사, 타일공사,욕실공사, 필름공사, 도배공사, 페인트공사, 마루공사, 조명공사를 포함한 전체 리모델링 공사를 뜻합니다.</p>
                    </div>
                    <div className='border border-gray-500 bg-gray-50 rounded-md p-2'>
                        <p className='text-sm lg:text-base mb-1'>부분시공</p>
                        <p className='text-xs lg:text-sm'>전체 인테리어 마감재를 새것으로 교체하는 것이 아닌 선택적 마감재 재사용과 리폼을 포함한 부분적 리모델링 공사 입니다.</p>
                    </div>
                </div>
            </div>
            <ReferenceForm />
            <PersonalInformationForm />
            <div className='flex justify-center'>
                <button
                    onClick={handleSubmit}
                    className='text-sm md:text-base font-body bg-black hover:opacity-75 text-white px-6 py-2 rounded-md'
                >
                    견적문의하기{/**나중에 인증, 권한 검사를 통해 admin에서 접근했다면 '등록' 으로 바꿀 수 있도록 변화 */}
                </button>
            </div>
        </form>
    )
}

export default ContactAddForm