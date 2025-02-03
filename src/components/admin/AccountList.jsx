import React from 'react'
import InfoBox from './InfoBox';
import InfoHeader from './InfoHeader';

function AccountList() {
    const data = [
        { id: 1, name: "이지환", email: 'example1@example.com', role: 'ADMIN' },
        { id: 2, name: "홍길동", email: 'example2@example.com', role: 'MANAGER' },
        { id: 3, name: "김철수", email: 'example3@example.com', role: 'MANAGER' },
        { id: 4, name: "김영희", email: 'example4@example.com', role: 'USER' },
    ];

    return (
        <div className="pt-4 px-1 md:px-4 lg:px-7">
            <InfoHeader items={["이름", "이메일", "권한"]} />
            <div>
                {data.map((item, index) => (
                    <InfoBox
                        key={index}
                        id={item.id}
                        row1={item.name}
                        row2={item.email}
                        row3={item.role}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccountList