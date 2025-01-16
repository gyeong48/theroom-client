import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import SubTitle from '../../components/basic/common/SubTitle';
import ContactProviderForm from '../../components/basic/contact/ContactProviderForm';

function ContactPage() {
    return (
        <BasicLayout>
            <div className="max-w-[1400px] mx-auto px-4 py-8 bg-white p-6">
                <SubTitle content={"CONTACT"} />
                <ContactProviderForm />
            </div>
        </BasicLayout>
    );
}

export default ContactPage