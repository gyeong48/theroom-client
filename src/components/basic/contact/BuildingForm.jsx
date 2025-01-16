import React from 'react'
import AddressBox from './AddressBox';
import GridInputBox from './GridInputBox';
import GridSelectBox from './GridSelectBox';

function BuildingForm() {
    return (
        <div className='font-body '>
            <div className='text-lg font-medium mb-1'>
                <h4>2. 건물물정보 <small>(필수*)</small></h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
                <GridSelectBox
                    isLabel={true}
                    label={"유형"}
                    id={"type"}
                    options={[{ value: "APARTMENT", content: "아파트" }, { value: "SMALLAPARTMENT", content: "빌라" }, { value: "HOUSE", content: "주택" }]}
                    placeholder={"선택"}
                />
                <GridInputBox
                    label={"면적"}
                    id={"exclusiveArea"}
                    type={"number"}
                    placeholder={"분양 면적을 입력해주세요 - 단위: 평"}
                />
            </div>

            {/* 주소 검색 */}
            <AddressBox />
        </div>
    )
}

export default BuildingForm