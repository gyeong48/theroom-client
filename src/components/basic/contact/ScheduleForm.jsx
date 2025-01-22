import React from 'react'
import GridInputBox from './GridInputBox';
import GridSelectBox from './GridSelectBox';

function ScheduleForm() {
    return (
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
                />
                <GridInputBox
                    label={"입주예정일"}
                    id={"moveInDate"}
                    type={"date"}
                    placeholder={null}
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                <GridInputBox
                    label={"공사예산"}
                    id={"budget"}
                    type={"number"}
                    placeholder={"단위: 만원"}
                />
                <GridSelectBox
                    isLabel={true}
                    label={"공사범위"}
                    id={"scope"}
                    placeholder={"선택"}
                    options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
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
    )
}

export default ScheduleForm