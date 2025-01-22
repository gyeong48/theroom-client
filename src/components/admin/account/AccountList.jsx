import React from 'react'

function AccountList() {
    const data = [
        { id: 1, name: "이지환", email: 'example1@example.com', role: '관리자' },
        { id: 2, name: "홍길동", email: 'example2@example.com', role: '매니저' },
        { id: 3, name: "김철수", email: 'example3@example.com', role: '매니저' },
        { id: 4, name: "김영희", email: 'example4@example.com', role: '일반' },
    ];

    return (
        <div className="p-6">
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-center">이름</th>
                        <th className="py-3 px-4 text-center">이메일</th>
                        <th className="py-3 px-4 text-center">권한</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition-all">
                            <td className="py-3 px-4 text-center">{item.name}</td>
                            <td className="py-3 px-4 text-center">{item.email}</td>
                            <td className="py-3 px-4 text-center">{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountList