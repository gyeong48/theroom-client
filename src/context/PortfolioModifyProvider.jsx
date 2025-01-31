import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const PortfolioModifyContext = createContext();

export function PortfolioModifyProvider({ children }) {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        id: id,
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
        thumbnail: { name: "test1.png", filename: "test1.png", size: 1024 },
        imageFiles: [
            { name: "test1.png", filename: "test1.png", size: 1024 * 1024 },
            { name: "test2.png", filename: "test2.png", size: 1024 * 1024 },
            { name: "test3.png", filename: "test3.png", size: 1024 * 1024 },
            { name: "test4.png", filename: "test4.png", size: 1024 * 1024 },
            { name: "test5.png", filename: "test5.png", size: 1024 * 1024 },
            { name: "test6.png", filename: "test6.png", size: 1024 * 1024 },
            { name: "test7.png", filename: "test7.png", size: 1024 * 1024 },
            { name: "test8.png", filename: "test8.png", size: 1024 * 1024 },
            { name: "test9.png", filename: "test9.png", size: 1024 * 1024 },
            { name: "test10.png", filename: "test10.png", size: 1024 * 1024 },
            { name: "test11.png", filename: "test11.png", size: 1024 * 1024 },
        ],
    })

    return (
        <PortfolioModifyContext.Provider value={{ formData, setFormData }}>
            {children}
        </PortfolioModifyContext.Provider>
    )
}