import React from 'react'
import Header from '../components/admin/common/Header'

function AdminLayout({ children }) {
    return (
        <div className="font-body">
            <Header />
            <main className='bg-gray-50 w-screen h-screen'>{children}</main>
        </div>
    )
}

export default AdminLayout