import React, { createContext, useState } from 'react'

export const ContactAddContext = createContext();

export function ContactAddProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    type: "",
    exclusiveArea: 0,
    postCode: "",
    address: "",
    detailAddress: "",
    startDate: "",
    moveInDate: "",
    budget: 0,
    scope: "",
    files: [],
    pesonalInformationAgree: false
  })

  return (
    <ContactAddContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactAddContext.Provider>
  )
}