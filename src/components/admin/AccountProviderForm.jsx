import React from 'react'
import { AccountProvider } from '../../context/AccountProvider'
import AccountForm from './AccountForm'

function AccountProviderForm() {
    return (
        <AccountProvider>
            <AccountForm />
        </AccountProvider>
    )
}

export default AccountProviderForm