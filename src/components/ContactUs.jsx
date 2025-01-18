import React, { useEffect, useRef } from 'react';
import Card from './HomeComponents/Card';
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ContactForm } from './ContactForm';
import { PERSONAL_INFO } from '../constants';

export const ContactUs = () => {
    const targetRef = useRef(null);

  useEffect(() => {
    // Scroll to the element when the component is loaded
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
    return (
        <div>
            <div ref={targetRef}>
                <h1 className='text-4xl font-semibold text-center px-2 py-4 text-[#1E3A8A]'>Contact Us</h1>
            </div>
            <div  className='flex items-center justify-center gap-16 px-2 py-5 flex-wrap'>
                <Card icon={PiPhoneCallFill} title={'Call'} description={PERSONAL_INFO.phone} height='56' width='64' />
                <Card icon={MdMarkEmailRead} title={'Email'} description={PERSONAL_INFO.email} height='56' width='64' />
                <Card icon={FaMapMarkerAlt} title={'Visit'} description={PERSONAL_INFO.address} height='56' width='64' />
            </div>
            <div className='flex flex-col md:flex-row gap-8 p-4'>
                <div className='w-full md:w-1/2 h-64 md:h-auto shadow'>
                    <address>
                        <div className=' '>
                            <iframe
                                className="w-full md:h-svh h-64 border rounded-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.71634186669974!2d69.74559423396946!3d21.684796790861885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957cb58ae8ba669%3A0x9f5085b71e4db1ed!2sBARDAI%20AND%20ASSOCIATIES!5e0!3m2!1sen!2sin!4v1736584805623!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </address>
                </div>
                <div className='w-full md:w-1/2 rounded-md bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-600'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};