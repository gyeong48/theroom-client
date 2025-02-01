import React from 'react'
import AccountList from '../../components/admin/AccountList'
import MainTitle from '../../components/admin/MainTitle'

function AccountPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Account List"} button={"등록"} path={"./add"} />
            <AccountList />
        </div>
    )
}

export default AccountPage