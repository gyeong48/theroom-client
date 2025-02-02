import React from 'react'
import MainTitle from '../../components/admin/MainTitle'
import ContactAddProviderForm from '../../components/user/ContactAddProviderForm'

function ContactAddPage() {
    return (
        <div className='pt-20 bg-white'>
            <MainTitle content={"Contact Add"} button={"목록"} path={"../contact"} />
            <div className='px-1 md:px-4 lg:px-7'>
                <ContactAddProviderForm />
            </div>
        </div>
    )
}

export default ContactAddPage