import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPortfolioModifyDetail } from '../api/portfolioApi';

export const PortfolioModifyContext = createContext();

export function PortfolioModifyProvider({ children }) {
    const { id } = useParams();
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        getPortfolioModifyDetail(id)
            .then((res) => {
                const data = res.data;
                console.log(data);
                setFormData({
                    id: data.id,
                    title: data.title,
                    buildingType: data.buildingType,
                    supplyArea: data.supplyArea,
                    exclusiveArea: data.exclusiveArea,
                    postCode: data.postCode,
                    mainAddress: data.mainAddress,
                    detailAddress: data.detailAddress,
                    latitude: data.latitude ? data.latitude : 0,
                    longitude: data.longitude ? data.longitude : 0,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    budget: data.budget,
                    interiorType: data.interiorType,
                    thumbnail: data.thumbnail,
                    imageFiles: data.imageFiles,
                    thumbnailName: data.thumbnail.name,
                    uploadImageFilenames: [],
                })
            });
    }, [id]);

    if (!formData) return <p>로딩 중...</p>;

    return (
        <PortfolioModifyContext.Provider value={{ formData, setFormData }}>
            {children}
        </PortfolioModifyContext.Provider>
    )
}