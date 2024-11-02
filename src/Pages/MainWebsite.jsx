import React, { useRef } from 'react'
import BasicLinks from '../Components/BasicLinks'
import NavBar from '../Components/NavBar'
import { useState } from 'react'
import Picture from '../Components/Picture'
import AboutMe from './AboutMe'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'
import Certifications from './Certifications'

const MainWebsite = () => {

    const [activeNavMenu, setActiveNavMenu] = useState("about-us")
    const contentPageRef = useRef();
    const aboutmeRef = useRef();
    const educationRef = useRef();
    const skillsRef = useRef();
    const experienceRef = useRef();
    const projectRef = useRef();
    const certificationRef = useRef();
    const achievementsRef = useRef(); 
    const contactRef = useRef();

    const scrollToSection = (elementRef)=> {
        contentPageRef.current.scrollTo({
            // top : elementRef.current.offsetTop - window.screen.height*0.15,
            top : elementRef.current.offsetTop,
            behavior:"smooth",
        })
    }

    return (

        <>
            <div className="w-full h-[100vh] flex">
                <div className="flex-[1] flex flex-col">
                    <div className="main_UpperDiv h-[15vh] min-h-[15vh] bg-blue-700/30 border-b-4 border-white">
                        <Picture />
                    </div>
                    <div className="main_LowerDiv w-full h-[85vh] max-h-[85vh] overflow-auto py-[20px] flex flex-col justify-center p-l-[20px]">
                        <NavBar activeNavMenu={activeNavMenu} 
                                setActiveNavMenu={setActiveNavMenu} 
                                aboutmeRef={aboutmeRef}
                                educationRef={educationRef} 
                                skillsRef={skillsRef}
                                experienceRef={experienceRef}
                                projectRef={projectRef}
                                certificationRef={certificationRef}
                                achievementsRef={achievementsRef}
                                contactRef={contactRef}
                                scrollToSection={scrollToSection}
                                />
                    </div>
                </div>
                <div className="flex-[4] flex flex-col">
                    {/* <div className="main_UpperDiv flex h-[15vh] min-h-[15vh] bg-blue-700/30 border-b-4 border-white">
                        <BasicLinks />
                    </div> */}
                    <div ref={contentPageRef} className="main_LowerDiv w-full h-[100vh] max-h-[100vh] overflow-auto py-[20px] flex flex-col justify-center p-l-[20px]">
                        <div className="mainContentWrapper w-full h-full p-y-[10px] p-x-[20px] p-r-[80px] text-white font-semibold font-xl">
                            <AboutMe aboutmeRef={aboutmeRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Education educationRef={educationRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Skills skillsRef={skillsRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Experience experienceRef={experienceRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Projects projectRef={projectRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Certifications certificationRef={certificationRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Achievements achievementsRef={achievementsRef} setActiveNavMenu={setActiveNavMenu}/>
                            <Contact contactRef={contactRef} setActiveNavMenu={setActiveNavMenu}/>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MainWebsite