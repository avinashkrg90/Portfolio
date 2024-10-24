import React from 'react'
import experienceIcon from '../assets/portfolio.png'

const Experience = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>EXPERIENCE</h1>
                <img className='w-10' src={experienceIcon} alt="Icon" />
            </div>
        </>
    )
}

export default Experience