import React from 'react'
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
import Hobbies from './Hobbies'
import Contact from './Contact'

const MainWebsite = () => {

    const [activeNavMenu, setActiveNavMenu] = useState("about-us")

    return (

        <>
            <div className="main_container">
                <div className="main_aside">
                    <div className="main_UpperDiv">
                        <Picture />
                    </div>
                    <div className="main_LowerDiv">
                        <NavBar activeNavMenu={activeNavMenu} setActiveNavMenu={setActiveNavMenu} />
                    </div>
                </div>
                <div className="main_body">
                    <div className="main_UpperDiv bodyHeader">
                        <BasicLinks />
                        <BasicLinks />
                    </div>
                    <div className="main_LowerDiv">
                        <div className="mainContentWrapper">
                            <AboutMe />
                            <Education />
                            <Skills />
                            <Experience />
                            <Projects />
                            <Achievements />
                            <Hobbies />
                            <Contact />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MainWebsite