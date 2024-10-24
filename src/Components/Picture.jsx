import React from 'react'
import './Picture.css'
import image from '../assets/photoAvi.jpg'

const Picture = () => {
    return (
        <div className="basicContainer">
            <div className="basicImageDivContainer">
                <div className="basicImageContainer">
                    <img src={image} alt="My Picture" />
                </div>
                <h3>Avinash Kumar Gupta</h3>
                <div className="basicHorizontalRuling">
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Picture