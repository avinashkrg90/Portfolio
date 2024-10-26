import React, { useRef } from 'react'
import BasicLinks from '../Components/BasicLinks'
import NavBar from '../Components/NavBar'
import { useState } from 'react'
import './MainWebsitePage.css'
import Picture from '../Components/Picture'
import AboutMe from './AboutMe'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'
import Certifications from './Certifications'
import { useInView } from "react-intersection-observer";

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
            top : elementRef.current.offsetTop - window.screen.height*0.15,
            behavior:"smooth",
        })
    }

    return (

        <>
            <div className="main_container">
                <div className="main_aside">
                    <div className="main_UpperDiv">
                        <Picture />
                    </div>
                    <div className="main_LowerDiv">
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
                <div className="main_body">
                    <div className="main_UpperDiv bodyHeader">
                        <BasicLinks />
                    </div>
                    <div ref={contentPageRef} className="main_LowerDiv">
                        <div className="mainContentWrapper">
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