import React, { createContext, useState } from 'react'

export const CompanyInfoContext = createContext();

export function CompanyInfoProvider({ children }) {
    const [formData, setFormData] = useState({
        name: "홍길동",
        email: "qnqn12345@naver.com",
        phoneNumber: "01011111111",
        postCode: "12345",
        address: "서울시 송파구 충민로188 (송파파인타운1단지)",
        detailAddress: "101동 301호",
        latitude: 0,
        longitude: 0
    })

    return (
        <CompanyInfoContext.Provider value={{ formData, setFormData }}>
            {children}
        </CompanyInfoContext.Provider>
    )
}