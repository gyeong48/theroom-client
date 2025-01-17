import React, { createContext, useState } from 'react'

export const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    supplyArea: 0,
    exclusiveArea: 0,
    postCode: "",
    address: "",
    detailAddress: "",
    startDate: "",
    endDate: "",
    completion: "",
    budget: 0,
    scope: "",
    files: [],
  })

  return (
    <PortfolioContext.Provider value={{ formData, setFormData }}>
      {children}
    </PortfolioContext.Provider>
  )
}