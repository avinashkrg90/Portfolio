import React from 'react'
import './BasicLinks.css'
import gitHubIcon from '../assets/github3.png'
import linkedinIcon from '../assets/linkedin.png'
import mailIcon from '../assets/email.png'
import telephoneIcon from '../assets/phone.png'

const BasicLinks = () => {
    return (
        <>
            <div className='flex gap-6 w-full min-h-full items-center '>
                <div className="basicLinksContainer">
                    <div className="basicGitHubLinkContainer">
                        <img src={gitHubIcon} alt="GitHubLink" />
                        <a target='_blank' href="https://github.com/avinashkrg90">avinashkrg90</a>
                    </div>
                    <div className="basicLinkedInLinkContainer">
                        <img src={linkedinIcon} alt="LinkedInLink" />
                        <a target='_blank' href="https://www.linkedin.com/in/avinash-kumar-gupta-b4a265285/">avinash-kumar-gupta-b4a265285</a>
                    </div>
                </div>
                <div className="basicLinksContainer">
                    <div className="basicEmailContainer">
                        <img src={mailIcon} alt="Email" />
                        robozealous@gmail.com
                    </div>
                    <div className="basicMobileContainer">
                        <img src={telephoneIcon} alt="MobileNumber" />
                        +91 9038950833
                    </div>
                </div>
            </div>

        </>
    )
}

export default BasicLinks