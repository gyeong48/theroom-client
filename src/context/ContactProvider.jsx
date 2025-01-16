import React, { createContext, useState } from 'react'

export const ContactContext = createContext();

export function ContactProvider({ children }) {
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
    <ContactContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactContext.Provider>
  )
}