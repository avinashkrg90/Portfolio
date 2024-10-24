import React from 'react'
import contactIcon from '../assets/contact.png'

const Contact = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>CONTACT</h1>
                <img className='w-10' src={contactIcon} alt="Icon" />
            </div>
        </>
    )
}

export default Contact