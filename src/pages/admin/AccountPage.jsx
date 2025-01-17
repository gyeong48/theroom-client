import React from 'react'
import SubTitle from '../../components/admin/common/SubTitle'
import AccountList from '../../components/admin/account/AccountList'

function AccountPage() {
    return (
        <div className='pt-40'>
            <SubTitle content={"Account List"} />
            <AccountList />
        </div>
    )
}

export default AccountPage