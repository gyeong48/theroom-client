import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import SubTitle from '../../components/user/SubTitle';
import ContactAddProviderForm from '../../components/user/ContactAddProviderForm';

function ContactPage() {
    return (
        <BasicLayout>
            <div className="max-w-[1400px] mx-auto px-4 py-8 bg-white p-6">
                <SubTitle content={"CONTACT"} />
                <ContactAddProviderForm />
            </div>
        </BasicLayout>
    );
}

export default ContactPage