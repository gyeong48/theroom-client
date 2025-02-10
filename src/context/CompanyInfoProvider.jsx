import React, { createContext, useEffect, useState } from 'react'
import { getCompanyInfo } from '../api/contentApi';
import FetchingModal from '../components/common/FetchingModal';

export const CompanyInfoContext = createContext();

export function CompanyInfoProvider({ children }) {
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        getCompanyInfo()
            .then(res => {
                console.log(res.data);
                setFormData(res.data);
            })
    }, [])


    if (!formData) return <FetchingModal />

    return (
        <CompanyInfoContext.Provider value={{ formData, setFormData }}>
            {children}
        </CompanyInfoContext.Provider>
    )
}