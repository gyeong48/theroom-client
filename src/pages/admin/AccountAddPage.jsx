import React from 'react'
import AccountProviderForm from '../../components/admin/account/AccountProviderForm'
import MainTitle from '../../components/admin/common/MainTitle'

function AccountAddPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Account Add"} button={"목록"} path={"../account"} />
            <AccountProviderForm />
        </div>
    )
}

export default AccountAddPage