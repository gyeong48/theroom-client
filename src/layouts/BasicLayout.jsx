import React from 'react'
import Header from '../components/common/Header'

function BasicLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default BasicLayout