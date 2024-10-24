import React from 'react'
import './introduction.css'
import image from '../assets/photoAvi.jpg'

const Introduction = () => {
    return (
        <>
            <div className="intro_container">
                <div class="intro_greet">
                    <h1 className='hi'>Hi</h1 >
                    <span>
                        <h1 className='intro_iam'>I am</h1>
                        <h1 className='intro_name'>Avinash Kumar Gupta</h1>
                    </span>
                    <h1 className='intro_welcomePortfolio'>Welcome to my <span>portfolio</span> website</h1>
                    <h1 className='intro_letsGetStarted'>Let's get started</h1>
                </div>
                <div className="intro_image">
                    <div className='intro_imageContainer'>
                        <img src={image} alt="My Picture" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Introduction