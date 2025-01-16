import React from 'react'
import GridInputBox from './GridInputBox';

function CustomerForm() {

    return (
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
                />
                <GridInputBox
                    label={"이메일"}
                    id={"email"}
                    type={"email"}
                    placeholder={"이메일을 입력해주세요"}
                />
                <GridInputBox
                    label={"연락처"}
                    id={"phoneNumber"}
                    type={"text"}
                    placeholder={"연락처를 입력해주세요"}
                />
            </div>
        </div>
    )
}

export default CustomerForm