import React from 'react'
import achievementsIcon from '../assets/medal.png'

const Achievements = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>ACHIEVEMENTS</h1>
                <img className='w-10' src={achievementsIcon} alt="Icon" />
            </div>
        </>
    )
}

export default Achievements