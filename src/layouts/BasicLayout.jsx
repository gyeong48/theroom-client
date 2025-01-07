import React from 'react'
import Header from '../components/common/Header'

function BasicLayout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default BasicLayout