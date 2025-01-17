import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import GridInputBox from '../common/GridInputBox';

function AccountForm() {
    const context = AccountContext;
    const { formData } = useContext(context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-8 p-6 mt-6">
            <form className="pt-10 space-y-14 bg-white p-6">
                <GridInputBox
                    label={"이름"}
                    id={"username"}
                    type={"text"}
                    placeholder={"이름을 입력해주세요."}
                    context={context}
                />
                <GridInputBox
                    label={"아이디"}
                    id={"email"}
                    type={"text"}
                    placeholder={"아이디를 입력해 주세요."}
                    context={context}
                />
                <GridInputBox
                    label={"비밀번호"}
                    id={"password"}
                    type={"password"}
                    placeholder={"비밀번호를 입력해주세요."}
                    context={context}
                />
                <div className='flex justify-center'>
                    <button
                        onClick={handleSubmit}
                        className='text-sm md:text-base font-body bg-black hover:opacity-75 text-white px-6 py-2 rounded-md'>등록</button>
                </div>
            </form>
        </div>
    )
}

export default AccountForm