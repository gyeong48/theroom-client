import React from 'react'
import MainTitle from '../../components/admin/common/MainTitle'
import ContactModifyProviderForm from '../../components/admin/contact/ContactModifyProviderForm'

function ContactDetailPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Contact Detail"} button={"목록"} path={"../contact"} />
            <ContactModifyProviderForm />
        </div>
    )
}

export default ContactDetailPage