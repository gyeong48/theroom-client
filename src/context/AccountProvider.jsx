import React, { createContext, useState } from 'react'

export const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  return (
    <AccountContext.Provider value={{ formData, setFormData }}>
      {children}
    </AccountContext.Provider>
  )
}