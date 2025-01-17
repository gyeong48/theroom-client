import React, { useState } from 'react'

function AccountList() {
    // 더미 데이터
    const data = [
        { no: 1, title: '게시글 1', type: '공지', date: '2025-01-01' },
        { no: 2, title: '게시글 2', type: '일반', date: '2025-01-03' },
        { no: 3, title: '게시글 3', type: '공지', date: '2025-01-02' },
        { no: 4, title: '게시글 4', type: '일반', date: '2025-01-04' },
        // 추가적인 데이터들...
    ];

    // 상태 변수 설정
    const [filteredData, setFilteredData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const [selectedType, setSelectedType] = useState('all');

    // 필터 기능
    const filterType = (type) => {
        setSelectedType(type);
        setFilteredData(
            type === 'all' ? data : data.filter(item => item.type === type)
        );
    };

    // 정렬 기능
    const sortByDate = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setFilteredData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // 페이지네이션 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="p-6">
            {/* 테이블 */}
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">No</th>
                        <th className="py-3 px-4 text-left">제목</th>
                        <th className="py-3 px-4 text-left">
                            <button onClick={sortByDate} className="flex items-center space-x-1">
                                <span>게시일</span>
                                {sortOrder === 'asc' ? (
                                    <span className="text-xs">↑</span>
                                ) : (
                                    <span className="text-xs">↓</span>
                                )}
                            </button>
                        </th>
                        <th className="py-3 px-4 text-left">
                            유형
                            {/* 유형 필터 드롭다운 */}
                            <select
                                value={selectedType}
                                onChange={(e) => filterType(e.target.value)}
                                className="ml-2 bg-transparent border-b-2 border-gray-600 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-1"
                            >
                                <option value="all">모두</option>
                                <option value="공지">공지</option>
                                <option value="일반">일반</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {currentItems.map((item) => (
                        <tr key={item.no} className="hover:bg-gray-100 transition-all">
                            <td className="py-3 px-4">{item.no}</td>
                            <td className="py-3 px-4">{item.title}</td>
                            <td className="py-3 px-4">{item.date}</td>
                            <td className="py-3 px-4">{item.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 페이지네이션 */}
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    이전
                </button>
                <span className="text-lg text-gray-600">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default AccountList