import React from 'react'
import hobbiesIcon from '../assets/hobbies.png'

const Hobbies = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>HOBBIES</h1>
                <img className='w-10' src={hobbiesIcon} alt="Icon" />
            </div>
        </>
    )
}

export default Hobbies