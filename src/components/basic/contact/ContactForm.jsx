import React, { useContext } from 'react'
import CustomerForm from './CustomerForm'
import BuildingForm from './BuildingForm'
import ScheduleForm from './ScheduleForm'
import ReferenceForm from './ReferenceForm'
import { ContactContext } from '../../../context/ContactProvider'
import PersonalInformationForm from './PersonalInformationForm'

function ContactForm() {
    const { formData } = useContext(ContactContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form className="pt-10 space-y-14">
            <CustomerForm />
            <BuildingForm />
            <ScheduleForm />
            <ReferenceForm />
            <PersonalInformationForm />
            <div className='flex justify-center'>
                <button
                    onClick={handleSubmit}
                    className='text-sm md:text-base font-body bg-black hover:opacity-75 text-white px-6 py-2 rounded-md'>견적문의하기</button>
            </div>
        </form>
    )
}

export default ContactForm