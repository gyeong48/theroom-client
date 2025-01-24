import React from 'react'
import AccountList from '../../components/admin/account/AccountList'
import MainTitle from '../../components/admin/common/MainTitle'

function AccountPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Account List"} button={"등록"} path={"./add"} />
            <AccountList />
        </div>
    )
}

export default AccountPage