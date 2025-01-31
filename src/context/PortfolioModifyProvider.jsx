import React, { createContext, useState } from 'react'

export const PortfolioModifyContext = createContext();

export function PortfolioModifyProvider({ children }) {
    const [formData, setFormData] = useState({
        id: 1,
        title: "송파파인타운1단지송파파인타운1단지송파파인타운1단지",
        type: "APARTMENT",
        supplyArea: 32,
        exclusiveArea: 22,
        postCode: "00000",
        address: "서울시 송파구 충민로188 (송파파인타운1단지)",
        detailAddress: "101동 301호",
        startDate: "2025-01-01",
        endDate: "2025-02-02",
        budget: 2000,
        scope: "ALL",
        thumbnail: null,
        imageFiles: [{/**url, imagename imageId*/ }],
    })

    return (
        <PortfolioModifyContext.Provider value={{ formData, setFormData }}>
            {children}
        </PortfolioModifyContext.Provider>
    )
}