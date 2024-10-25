import React from 'react'
import experienceIcon from '../assets/portfolio.png'

const Experience = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>EXPERIENCE</h1>
                <img className='w-10' src={experienceIcon} alt="Icon" />
            </div>

            <div className='pb-16 pt-6 flex flex-col w-10/12 m-auto relative'>
                <div className='text-justify py-5 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-6'>
                    Worked with Dee electric Proprietorship in Hoogly, West Bengal, on circuit and PCB designing, Firmware development for 
                    Atmel, PIC and STM Microcontrollers for 1.5 years. Firmware development in C, C++, and Assembly languages was done for 
                    manufacturing of commercial electronic devices.                     
                </div>
                <div className='text-justify py-5 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-6'>
                    Have 8 years of non-professional experience in embedded system designing in creating automation, wi-fi, bluetooth, IoT electronic
                    devices, with Atmel, STM, ESP-32, PIC microcontrollers. Also have experience in PCB and circuit designing.   
                </div>
                <div className='text-justify py-5 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-4'>
                    worked with Femurs India Pvt. Ltd. for 1 years in the assisting with Machine Learning techniques, and algorithm. Worked with 
                    fully automated temperature monitoring system. 
                </div>
                <div className='text-justify py-5 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-4'>
                    Have 1 year of non-professional experince in full stack web development. Have created many websites with full fleged frontend
                    with React-js, and backend supported by databases like MongoDB and firebase.  
                </div>
                <div className='text-justify py-5 border-l-2 border-orange-400 px-8 before:absolute before:bg-orange-400 before:shadow before:w-4 before:h-4 before:rounded-full before:ml-[-41px] before:mt-1'>
                    Presently working as a freelancer in full stack web development. 
                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

export default Experience