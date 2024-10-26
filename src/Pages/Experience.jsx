import React, { useEffect, useRef } from 'react'
import experienceIcon from '../assets/portfolio.png'
import calendarIcon from '../assets/calendar.png'
import { useInView } from "react-intersection-observer";

const Experience = ({ experienceRef, setActiveNavMenu }) => {

    // const ref = useRef();

    const { ref, inView } = useInView({
        threshold:0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveNavMenu("experience");
        }
    }, [inView])

    return (
        <>
            <div ref={experienceRef} className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>EXPERIENCE</h1>
                <img className='w-10' src={experienceIcon} alt="Icon" />
                <h1>{inView}</h1>
            </div>

            <div ref={ref}>
                <div className='pb-16 pt-6 flex flex-col w-10/12 m-auto relative'>

                    <ExperienceBlock text={'Worked with Dee electric Proprietorship in Hoogly, West Bengal, on circuit and PCB designing, Firmware development for Atmel, PIC and STM Microcontrollers for 1.5 years. Firmware development in C, C++, and Assembly languages was done for manufacturing of commercial electronic devices.'}
                        fromDate={"Oct 2014"} toDate={"mar 2016"} marginForDot={6} />

                    <ExperienceBlock text={'Have 8 years of non-professional experience in embedded system designing in creating automation, wi-fi, bluetooth, IoT electronic devices, with Atmel, STM, ESP-32, PIC microcontrollers. Also have experience in PCB and circuit designing.'}
                        fromDate={"2016"} toDate={"2024"} marginForDot={6} />

                    <ExperienceBlock text={'worked with Femurs India Pvt. Ltd. for 1 years in the assisting with Machine Learning techniques, and algorithm. Worked with fully automated temperature monitoring system.'}
                        fromDate={"July 2016"} toDate={"Aug 2017"} marginForDot={4} />

                    <ExperienceBlock text={'Have 1.5 year of non-professional experince in full stack web development. Have created many websites with full fleged frontend with React-js, and backend supported by databases like MongoDB and firebase.'}
                        fromDate={"Jun 2023"} toDate={"2024"} marginForDot={4} />

                    <ExperienceBlock text={'Presently working as a freelancer in full stack web development.'}
                        fromDate={"Aug 2024"} toDate={"present"} marginForDot={1} />

                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

const ExperienceBlock = ({ text, fromDate, toDate, marginForDot }) => {
    return (
        <>
            <div className={`text-justify py-4 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-${marginForDot}`}>
                {text}
                <div className='flex gap-3 items-center mt-1'>
                    <img className='w-5' src={calendarIcon} alt="date" />
                    <div className='text-black font-semibold'>{fromDate} - {toDate}</div>
                </div>
            </div>
        </>
    )
}


export default Experience