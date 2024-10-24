import React from 'react'
import collegeLogo from '../assets/IISER-K_Logo.png'
import kvsLogo from '../assets/kvslogo.jpg'
import educationIcon from '../assets/mortarboard.png'

const Education = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>EDUCATION</h1>
                <img className='w-10' src={educationIcon} alt="Icon" />
            </div>
            <div className='flex pb-12'>

                <EducationCard heading="Graduation and Post Graduation" institute="Indian Institute of science Education and Research, Kolkata"
                    image={collegeLogo} description="completed 5 year Integrated BS-MS (Major in Physics) in year 2014" />

                <EducationCard heading="Higher Secondary Certificate (HSC)" institute="Kendriya Vidyalaya, Danapur cantt."
                    image={kvsLogo} description="completed HSC in Science (P+C+M) in year 2008" />

            </div>
        </>
    )
}

const EducationCard = ({ heading, institute, image, description }) => {
    return (
        <>
            <div className='flex-1 my-6 px-10'>
                <h1 className='text-2xl border-b-2 border-gray-800 font-semibold mb-5 pb-1 text-black'>{heading}</h1>
                <h3 className='text-orange-400'>University/Institute</h3>
                <div className='flex items-center gap-4 my-4 h-2/5'>
                    <img className='w-24' src={image} alt="Logo" />
                    <p className='text-lg'>{institute}</p>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Education