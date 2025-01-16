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
        </div>
    )
}

export default ScheduleForm