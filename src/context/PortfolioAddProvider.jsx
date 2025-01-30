import React, { createContext, useState } from 'react'

export const PortfolioAddContext = createContext();

export function PortfolioAddProvider({ children }) {
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
    thumbnail: null,
    imageFiles: [],
  })

  return (
    <PortfolioAddContext.Provider value={{ formData, setFormData }}>
      {children}
    </PortfolioAddContext.Provider>
  )
}