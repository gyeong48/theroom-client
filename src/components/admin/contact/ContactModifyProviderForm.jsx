import React from 'react'
import { ContactModifyProvider } from '../../../context/ContactModifyProvider'
import ContactModifyForm from './ContactModifyForm'

function ContactModifyProviderForm() {
    return (
        <ContactModifyProvider>
            <ContactModifyForm />
        </ContactModifyProvider>
    )
}

export default ContactModifyProviderForm