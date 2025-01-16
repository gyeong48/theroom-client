import React from 'react'
import ContactForm from './ContactForm'
import { ContactProvider } from '../../../context/ContactProvider'

function ContactProviderForm() {
    return (
        <ContactProvider>
            <ContactForm />
        </ContactProvider>
    )
}

export default ContactProviderForm