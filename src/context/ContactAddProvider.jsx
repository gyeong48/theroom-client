import React, { createContext, useState } from 'react'

export const ContactAddContext = createContext();

export function ContactAddProvider({ children }) {
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phoneNumber: "",
    buildingType: "",
    exclusiveArea: "",
    postCode: "",
    mainAddress: "",
    detailAddress: "",
    latitude: "",
    longitude: "",
    startDate: "",
    moveInDate: "",
    budget: "",
    interiorType: "",
    files: [],
    pesonalInformationAgree: false
  })

  return (
    <ContactAddContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactAddContext.Provider>
  )
}