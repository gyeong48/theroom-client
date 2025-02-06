import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContactDetail } from '../api/contactApi';

export const ContactModifyContext = createContext();

export function ContactModifyProvider({ children }) {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getContactDetail(id)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setFormData({
          id: data.id,
          customer: data.customer,
          email: data.email,
          phoneNumber: data.phoneNumber,
          buildingType: data.buildingType,
          exclusiveArea: data.exclusiveArea,
          postCode: data.postCode,
          mainAddress: data.mainAddress,
          detailAddress: data.detailAddress,
          latitude: data.latitude ? data.latitude : 0,
          longitude: data.longitude ? data.longitude : 0,
          startDate: data.startDate,
          moveInDate: data.moveInDate,
          budget: data.budget,
          interiorType: data.interiorType,
          files: data.files,
          uploadFilenames: [],
          status: data.status,
          memo: data.memo,
        })
      });
  }, [id]);

  if (!formData) return <p>로딩 중...</p>;

  return (
    <ContactModifyContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactModifyContext.Provider>
  )
}