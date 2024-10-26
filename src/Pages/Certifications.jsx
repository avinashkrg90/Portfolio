import React, { useEffect } from 'react'
import codingNinjasLogo from '../assets/codingNinjas.jpg'
import certificationIcon from '../assets/certificate.png'
import { useInView } from "react-intersection-observer";

const Certifications = ({ certificationRef, setActiveNavMenu }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveNavMenu("certifications");
        }
    }, [inView])

    return (
        <>
            <div ref={certificationRef} className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>CERTIFICATIONS</h1>
                <img className='w-10' src={certificationIcon} alt="Icon" />
            </div>


            <div ref={ref}>
                <div className='w-full pb-24 pt-6 flex gap-10 pl-[17%]'>
                    <div className='w-48 h-48 bg-white rounded-xl flex items-center'>
                        <img className='w-52 ' src={codingNinjasLogo} alt="Coding Ninjas Logo" />
                    </div>
                    <div className='text-xl'>
                        <p className='pb-5 text-orange-500 font-semibold font-sans'>Certification from "Coding Ninjas" in following:</p>
                        <ul className='pl-6 text-lg'>
                            <li>Completion certificate in DSA in Java Language</li>
                            <li>Completion certificate in Frontend Development</li>
                            <li>Completion certificate in Backend development</li>
                            <li>Completion certificate in React-JS frontend development</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

export default Certifications