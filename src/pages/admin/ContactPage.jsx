import React from 'react'
import ContactList from '../../components/admin/contact/ContactList'
import MainTitle from '../../components/admin/common/MainTitle'

function ContactPage() {
    return (
        <div className='pt-40'>
            <MainTitle content={"Contact List"} button={"등록"} path={"./add"} />
            <ContactList />
        </div>
    )
}

export default ContactPage