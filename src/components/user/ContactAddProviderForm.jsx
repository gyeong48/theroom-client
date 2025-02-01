import React from 'react'
import ContactAddForm from './ContactAddForm'
import { ContactAddProvider } from '../../context/ContactAddProvider'

function ContactAddProviderForm() {
    return (
        <ContactAddProvider>
            <ContactAddForm />
        </ContactAddProvider>
    )
}

export default ContactAddProviderForm