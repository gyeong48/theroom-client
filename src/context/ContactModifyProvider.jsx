import React, { createContext, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ContactModifyContext = createContext();

export function ContactModifyProvider({ children }) {
  const { id } = useParams();

  //Modify의 경우 필요하지 않는 데이터가 있을 수 있음
  //추후 결정
  const [formData, setFormData] = useState({
    id: id,
    name: "홍길동",
    email: "qnqn12345@naver.com",
    phoneNumber: "01011111111",
    type: "SMALLAPARTMENT",
    exclusiveArea: 32,
    postCode: "12345",
    address: "서울시 송파구 충민로188 (송파파인타운1단지)",
    detailAddress: "101동 301호",
    startDate: "2025-01-01",
    moveInDate: "2025-02-02",
    budget: 1000,
    scope: "ALL",
    files: [],
    memo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi corporis recusandae. Sunt, quam blanditiis quos, voluptatem animi unde sed illum mollitia dicta eos ut quis ipsam. Alias, saepe iste!"
  })

  return (
    <ContactModifyContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactModifyContext.Provider>
  )
}