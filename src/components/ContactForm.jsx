import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_vi3nu0j', 'template_b81z7pb', form.current, {
                publicKey: '97sJwRBwJGRzuKBIA',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>



            <form ref={form} onSubmit={sendEmail} className=' h-full w-full flex flex-col justify-around items-center rounded-md shadow p-4'>
                <div className='p-2 '>
                    <h1 className='text-3xl font-semibold'>Get In Touch</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-2 w-full'>


                    <input className='border rounded-md border-black w-3/4 px-1 py-2 ' type="text" placeholder='Name' name="from_name" />

                    <input className='border rounded-md border-black w-3/4 px-1 py-2 ' type="email" name="from_email" placeholder='Email' />

                    <input className='border rounded-md border-black w-3/4 px-1 py-2 ' type="number" name="from_phone" placeholder='Phone Number' />

                    <textarea className='border rounded-md border-black w-3/4 px-1 py-2 ' name="message" placeholder='Enter your message here' />

                    <input
                        className='relative border rounded-md border-black w-3/4 px-1 py-2 cursor-pointer bg-gradient-to-r from-blue-800 via-emerald-400 to-teal-500 transition-opacity duration-3000 ease-out hover:opacity-80'
                        type="submit"
                        value="Send"
                    />
                    
                </div>
            </form>

        </>
    );
};