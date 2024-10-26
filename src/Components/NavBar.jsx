import React from 'react'
import './NavBar.css'

const NavBar = ({ activeNavMenu,
    setActiveNavMenu,
    aboutmeRef,
    educationRef,
    skillsRef,
    experienceRef,
    projectRef,
    certificationRef,
    achievementsRef,
    contactRef,
    scrollToSection }) => {

    return (
        <>
            <nav className='nav_navContainer'>
                <ul >
                    <li onClick={() => { scrollToSection(aboutmeRef), setActiveNavMenu("about-us") } } name="about-us" className={activeNavMenu === 'about-us' ? 'nav_selected' : 'null'}>About me</li>
                    <li onClick={() => { scrollToSection(educationRef), setActiveNavMenu("education") }} name="education" className={activeNavMenu === 'education' ? 'nav_selected' : 'null'}>Education</li>
                    <li onClick={() => { scrollToSection(skillsRef), setActiveNavMenu("skills") }} name="skills" className={activeNavMenu === 'skills' ? 'nav_selected' : 'null'}>Skills</li>
                    <li onClick={() => { scrollToSection(experienceRef), setActiveNavMenu("experience") }} name="experience" className={activeNavMenu === 'experience' ? 'nav_selected' : 'null'}>Profession experience</li>
                    <li onClick={() => { scrollToSection(projectRef), setActiveNavMenu("projects") }} name="projects" className={activeNavMenu === 'projects' ? 'nav_selected' : 'null'}>Projects</li>
                    <li onClick={() => { scrollToSection(certificationRef), setActiveNavMenu("certifications") }} name="certifications" className={activeNavMenu === 'certifications' ? 'nav_selected' : 'null'}>Certifications</li>
                    <li onClick={() => { scrollToSection(achievementsRef), setActiveNavMenu("achievements") }} name="achievements" className={activeNavMenu === 'achievements' ? 'nav_selected' : 'null'}>Achievements</li>
                    <li onClick={() => { scrollToSection(contactRef), setActiveNavMenu("contact") }} name="contact" className={activeNavMenu === 'contact' ? 'nav_selected' : 'null'}>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar