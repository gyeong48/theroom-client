import React from 'react'
import MainTitle from '../../components/admin/MainTitle'
import ContactModifyProviderForm from '../../components/admin/ContactModifyProviderForm'

function ContactDetailPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Contact Detail"} button={"목록"} path={"../contact"} />
            <div className='px-1 md:px-4 lg:px-7'>
                <ContactModifyProviderForm />
            </div>
        </div>
    )
}

export default ContactDetailPage