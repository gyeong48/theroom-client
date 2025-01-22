import { React } from "react";
import ContactCard from "./ContactCard";

const data = [
    {
        id: 1,
        items: [
            { label: "이름", content: "홍길동" },
            { label: "연락처", content: "010-0000-0000" },
            { label: "주소", content: "서울시 송파구 문정동" },
            { label: "상세주소", content: "111동 111호" },
            { label: "유형", content: "아파트" },
            { label: "면적", content: "00평" },
        ]
    },
    {
        id: 3,
        items: [
            { label: "이름", content: "홍길동" },
            { label: "연락처", content: "010-0000-0000" },
            { label: "주소", content: "서울시 송파구 문정동" },
            { label: "상세주소", content: "111동 111호" },
            { label: "유형", content: "아파트" },
            { label: "면적", content: "00평" },
        ]
    },
    {
        id: 3,
        items: [
            { label: "이름", content: "홍길동" },
            { label: "연락처", content: "010-0000-0000" },
            { label: "주소", content: "서울시 송파구 문정동" },
            { label: "상세주소", content: "111동 111호" },
            { label: "유형", content: "아파트" },
            { label: "면적", content: "00평" },
        ]
    },
    {
        id: 4,
        items: [
            { label: "이름", content: "홍길동" },
            { label: "연락처", content: "010-0000-0000" },
            { label: "주소", content: "서울시 송파구 문정동" },
            { label: "상세주소", content: "111동 111호" },
            { label: "유형", content: "아파트" },
            { label: "면적", content: "00평" },
        ]
    },
]

function ContactList() {
    return (
        <div className='p-6'>
            <div className="flex flex-wrap items-center">
                {
                    data.map((d, index) => (
                        <ContactCard key={index} items={d.items} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactList