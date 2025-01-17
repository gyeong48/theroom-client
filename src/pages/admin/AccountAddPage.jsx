import React from 'react'
import SubTitle from '../../components/admin/common/SubTitle'
import AccountProviderForm from '../../components/admin/account/AccountProviderForm'

function AccountAddPage() {
    return (
        <div className='pt-40'>
            <SubTitle content={"Account Add"} />
            <AccountProviderForm />
        </div>
    )
}

export default AccountAddPage