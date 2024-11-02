import React, { useEffect } from 'react'
import collegeLogo from '../assets/IISER-K_Logo.png'
import kvsLogo from '../assets/kvslogo.jpg'
import educationIcon from '../assets/mortarboard.png'
import { useInView } from "react-intersection-observer";

const Education = ({ educationRef, setActiveNavMenu }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveNavMenu("education");
        }
    }, [inView])


    return (
        <>
            <div ref={educationRef} className="w-full flex justify-center items-center gap-3">
                <h1 className='text-blue-600  font-bold text-3xl'>EDUCATION</h1>
                <img className='w-10' src={educationIcon} alt="Icon" />
            </div>

            <div ref={ref}>
                <div className='flex pb-6 gap-8'>

                    <EducationCard heading="Graduation and Post Graduation" institute="Indian Institute of science Education and Research, Kolkata"
                        image={collegeLogo} description="completed 5 year Integrated BS-MS (Major in Physics) in year 2014" />

                    <EducationCard heading="Higher Secondary Certificate (HSC)" institute="Kendriya Vidyalaya, Danapur cantt."
                        image={kvsLogo} description="completed HSC in Science (P+C+M) in year 2008" />

                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

const EducationCard = ({ heading, institute, image, description }) => {
    return (
        <>
            <div className='flex-1 my-6 p-10 hover:scale-110 duration-200'>
                <h1 className='text-2xl border-b-2 border-gray-800 font-semibold mb-5 pb-1 text-blue-400'>{heading}</h1>
                <h3 className='text-blue-600 font-semibold text-lg'>University/Institute</h3>
                <div className='flex items-center gap-4 my-4 h-2/5'>
                    <div className='min-w-40 h-[110px] bg-gray-50/80 rounded-full flex justify-center items-center'>
                        <img className='w-24 mt-[-6px]' src={image} alt="Logo" />
                    </div>
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