import React from 'react'
import './NavBar.css'

const NavBar = ({ activeNavMenu, setActiveNavMenu }) => {

    const handleNavMenuClick = (e)=>{
        setActiveNavMenu(e.target.getAttribute('name'));
        console.log(activeNavMenu)
    }

    return (
        <>
            <nav className='nav_navContainer'>
                <ul >
                    <li onClick={handleNavMenuClick} name="about-us" className={activeNavMenu==='about-us'?'nav_selected':'null'}>About me</li>
                    <li onClick={handleNavMenuClick} name="education" className={activeNavMenu==='education'?'nav_selected':'null'}>Education</li>
                    <li onClick={handleNavMenuClick} name="skills" className={activeNavMenu==='skills'?'nav_selected':'null'}>Skills</li>
                    <li onClick={handleNavMenuClick} name="experience" className={activeNavMenu==='experience'?'nav_selected':'null'}>Profession experience</li>
                    <li onClick={handleNavMenuClick} name="projects" className={activeNavMenu==='projects'?'nav_selected':'null'}>Projects</li>
                    <li onClick={handleNavMenuClick} name="achievements" className={activeNavMenu==='achievements'?'nav_selected':'null'}>Achievements</li>
                    <li onClick={handleNavMenuClick} name="hobbies" className={activeNavMenu==='hobbies'?'nav_selected':'null'}>Hobbies</li>
                    <li onClick={handleNavMenuClick} name="contact" className={activeNavMenu==='contact'?'nav_selected':'null'}>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar