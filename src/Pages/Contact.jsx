import React, { useState } from 'react'
import contactIcon from '../assets/contact.png'
import githubIcon from '../assets/github2.png'
import linkedinIcon from '../assets/linkedin.png'
import facebookIcon from '../assets/facebook.png'

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' })

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', mobile: '', message: '' })
    }

    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>CONTACT</h1>
                <img className='w-10' src={contactIcon} alt="Icon" />
            </div>

            <div className='flex w-full px-32'>

                <div className='p-10 flex-[1]'>
                    <div className='flex flex-col items-center justify-center bg-gray-50/40 rounded-xl gap-5 p-6 h-full'>
                        <div className='cursor-pointer'><img className='w-10' src={githubIcon} alt="git hub" /></div>
                        <div className='cursor-pointer'><img className='w-10' src={linkedinIcon} alt="linkedIn" /></div>
                        <div className='cursor-pointer'><img className='w-10' src={facebookIcon} alt="linkedIn" /></div>
                        <div className='cursor-pointer'><img className='w-10' src={linkedinIcon} alt="linkedIn" /></div>
                    </div>
                </div>

                <div className='p-10 flex-[5] w-full'>
                    <div className='bg-gray-50/40 rounded-xl'>

                        <form action="" className='flex flex-col items-center justify-center gap-5 p-6'>
                            <h3 className='text-2xl text-gray-100'>Get in touch</h3>
                            <input className='py-2 px-5 text-black rounded-2xl outline-none w-[80%] text-md' onChange={(e) => setFormData({ ...formData, name: e.value })} value={formData.name} type="text" placeholder='Your name' />
                            <input className='py-2 px-5 text-black rounded-2xl outline-none w-[80%] text-md' onChange={(e) => setFormData({ ...formData, email: e.value })} value={formData.email} type="email" placeholder='Your email id' />
                            <input className='py-2 px-5 text-black rounded-2xl outline-none w-[80%] text-md' onChange={(e) => setFormData({ ...formData, mobile: e.value })} value={formData.mobile} type="text" placeholder='Your mobile number' />
                            <textarea className='py-2 px-5 text-black rounded-2xl outline-none w-[80%] h-32 text-md' onChange={(e) => setFormData({ ...formData, message: e.value })} value={formData.message} name="message" id="message" placeholder='Message'>
                            </textarea>
                            <button className='bg-orange-500 p-2 px-4 text-black rounded-xl shadow-md text-md hover:bg-orange-400 active:scale-90 select-none' onClick={handleSubmitBtn} type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact