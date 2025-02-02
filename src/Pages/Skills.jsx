import React, { useState, useEffect } from 'react'
import skillsIcon from '../assets/skill.png'
import rightArrowIcon from '../assets/right-arrow.png'
import SkillBars from '../Components/SkillBars'
import { useInView } from "react-intersection-observer";

const Skills = ({ skillsRef, setActiveNavMenu }) => {

    const [skillSelected, setSkillSelected] = useState("frontend")

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveNavMenu("skills");
        }
    }, [inView])

    return (
        <>
            <div ref={skillsRef} className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>SKILLS</h1>
                <img className='w-10' src={skillsIcon} alt="Icon" />
            </div>

            <div ref={ref}>
                <div className="skills_mainContainer w-full min-h-[550px] pt-6 flex pb-20 mt-3 mx-10">
                    <div className="flex-[3] m-auto">
                        <ul className='flex flex-col items-end gap-3 text-xl text-black font-medium'>
                            <li className={`select-none duration-300 p-3 w-full flex items-center justify-end gap-3 cursor-pointer hover:bg-gray-300 ${skillSelected === "frontend" ? 'bg-gray-50/40 font-semibold' : 'bg-transparent font-medium'}`} onClick={() => setSkillSelected("frontend")}>Frontend Developing {skillSelected === "frontend" ? null : <img className='w-3 h-3' src={rightArrowIcon} alt=">" />} </li>
                            <li className={`select-none duration-300 p-3 w-full flex items-center justify-end gap-3 cursor-pointer hover:bg-gray-300 ${skillSelected === "backend" ? 'bg-gray-50/40 font-semibold' : 'bg-transparent font-medium'}`} onClick={() => setSkillSelected("backend")}>Backend Developing {skillSelected === "backend" ? null : <img className='w-3 h-3' src={rightArrowIcon} alt=">" />}</li>
                            <li className={`select-none duration-300 p-3 w-full flex items-center justify-end gap-3 cursor-pointer hover:bg-gray-300 ${skillSelected === "embedded" ? 'bg-gray-50/40 font-semibold' : 'bg-transparent font-medium'}`} onClick={() => setSkillSelected("embedded")}>Embedded Systems {skillSelected === "embedded" ? null : <img className='w-3 h-3' src={rightArrowIcon} alt=">" />}</li>
                            <li className={`select-none duration-300 p-3 w-full flex items-center justify-end gap-3 cursor-pointer hover:bg-gray-300 ${skillSelected === "otherSoft" ? 'bg-gray-50/40 font-semibold' : 'bg-transparent font-medium'}`} onClick={() => setSkillSelected("otherSoft")}>Other Soft skills {skillSelected === "otherSoft" ? null : <img className='w-3 h-3' src={rightArrowIcon} alt=">" />}</li>
                        </ul>
                    </div>
                    <div className="flex-[4] rounded-2xl bg-gray-50/40 text-black py-8 px-20 mr-40">
                        <SkillBars skillSelected={skillSelected} />
                    </div>
                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

export default Skills