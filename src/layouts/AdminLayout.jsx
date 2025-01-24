import React from 'react'
import Sidebar from '../components/admin/common/Sidebar'

function AdminLayout({ children }) {
    return (
        <div className="font-body">
            <aside><Sidebar /></aside>
            <main className='bg-gray-50 min-h-screen lg:ml-64'>{children}</main>
        </div>
    )
}

export default AdminLayout