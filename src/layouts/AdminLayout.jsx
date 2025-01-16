import React from 'react'

function AdminLayout({ children }) {
    return (
        <div className="flex bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 h-screen bg-white p-4 fixed left-0 top-0 shadow-md">
                <h1 className="text-2xl font-bold text-gray-900">TheRoom</h1>
                <nav className="mt-6">
                    <ul className="space-y-4">
                        <li className="text-gray-700 hover:text-black cursor-pointer">계정관리</li>
                        <li className="text-gray-700 hover:text-black cursor-pointer">포트폴리오관리</li>
                        <li className="text-gray-700 hover:text-black cursor-pointer">견적문의관리</li>
                        <li className="text-gray-700 hover:text-black cursor-pointer">로그아웃</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="ml-64 w-full">
                {/* Header */}
                <header className="h-16 bg-white shadow-md p-4 flex justify-between items-center border-b border-gray-300">
                    <h2 className="text-xl font-semibold text-gray-900">Portfolio List</h2>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">등록</button>
                </header>

                {/* Content */}
                <main className="p-6 bg-white shadow-md rounded-lg m-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default AdminLayout