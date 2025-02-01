import React, { useState } from 'react';
import InfoBox from './InfoBox';
import InfoHeader from './InfoHeader';

const ContactList = () => {
    const data = [
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "CONTACT" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "MEET1" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "MEET2" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "MEET3" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "CONTRACT" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "INPROGRESS" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "COMPLETE" },
        { id: 1, name: '홍길동', address: '서울시 송파구 충민로188 (송파파인타운1단지)', detailAddress: "101동 301호", state: "HOLD" },
    ];

    const [filteredData, setFilteredData] = useState(data);
    const [selectedType, setSelectedType] = useState('all');

    const filterType = (state) => {
        setSelectedType(state);
        setFilteredData(
            state === 'all' ? data : data.filter(item => item.state === state)
        );
    };

    return (
        <div className="pt-4 px-1 md:px-4 lg:px-7">
            <InfoHeader items={["이름", "주소", "상태"]} />
            <div>
                {filteredData.map((item, index) => (
                    <InfoBox
                        key={index}
                        id={item.id}
                        row1={item.name}
                        row2={item.address + " " + item.detailAddress}
                        row3={item.state}
                    />
                ))}
            </div>
            <div className='flex justify-end items-center mt-2'>
                유형
                <select
                    value={selectedType}
                    onChange={(e) => filterType(e.target.value)}
                    className="ml-2 bg-transparent border border-gray-300 text-gray-700 focus:outline-none rounded-md p-1"
                >
                    <option value="all">모두</option>
                    <option value="CONTACT">상담전</option>
                    <option value="MEET1">상담1</option>
                    <option value="MEET2">상담2</option>
                    <option value="MEET3">상담3</option>
                    <option value="CONTRACT">계약완료</option>
                    <option value="INPROGRESS">시공중</option>
                    <option value="COMPLETE">시공완료</option>
                    <option value="HOLD">보류</option>
                </select>
            </div>
        </div>
    );
};

export default ContactList;
