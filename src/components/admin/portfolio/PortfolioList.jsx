import React, { useState } from 'react';

const PortfolioList = () => {
    // 더미 데이터
    const data = [
        { no: 4, title: '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아', type: 'apartment', date: '2025-01-01' },
        { no: 3, title: '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아', type: 'apartment', date: '2025-01-03' },
        { no: 2, title: '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아', type: 'smallApartment', date: '2025-01-02' },
        { no: 1, title: '아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아', type: 'smallApartment', date: '2025-01-04' },
    ];

    const [filteredData, setFilteredData] = useState(data);
    const [sortOrder, setSortOrder] = useState('desc');
    const [selectedType, setSelectedType] = useState('all');

    const filterType = (type) => {
        setSelectedType(type);
        setFilteredData(
            type === 'all' ? data : data.filter(item => item.type === type)
        );
    };

    const sortByDate = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setFilteredData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="p-6">
            {/* 테이블 */}
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 text-center">No</th>
                        <th className="py-3 px-4 text-center">제목</th>
                        <th className="py-3 px-4 text-center">
                            {/* 유형 필터 드롭다운 */}
                            <select
                                value={selectedType}
                                onChange={(e) => filterType(e.target.value)}
                                className="ml-2 bg-transparent border-b-2 bg-white border-gray-600 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md p-1"
                            >
                                <option value="all">모두</option>
                                <option value="apartment">아파트</option>
                                <option value="smallApartment">빌라</option>
                            </select>
                        </th>
                        <th className="py-3 px-4 text-center">
                            <button onClick={sortByDate} className="space-x-1 focus:outline-none flex items-center mx-auto">
                                <span>게시일</span>
                                {sortOrder === 'asc' ? (
                                    <span className="text-xs">↑</span>
                                ) : (
                                    <span className="text-xs">↓</span>
                                )}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {filteredData.map((item) => (
                        <tr key={item.no} className="hover:bg-gray-100 transition-all">
                            <td className="py-3 px-4 text-center">{item.no}</td>
                            <td className="py-3 px-4 text-center">{item.title}</td>
                            <td className="py-3 px-4 text-center">{item.type}</td>
                            <td className="py-3 px-4 text-center">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PortfolioList;
