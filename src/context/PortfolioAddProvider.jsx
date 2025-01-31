import React, { createContext, useState } from 'react'

export const PortfolioAddContext = createContext();

export function PortfolioAddProvider({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    supplyArea: "",
    exclusiveArea: "",
    postCode: "",
    address: "",
    detailAddress: "",
    startDate: "",
    endDate: "",
    budget: "",
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