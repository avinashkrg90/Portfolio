import React from 'react'

const SkillBars = ({ skillSelected }) => {
    return (
        <>
            {
                skillSelected === "frontend" ? <FrontendSkillBars /> :
                    skillSelected === "backend" ? <BackendSkillBars /> :
                        skillSelected === "embedded" ? <EmbeddedSkillBars /> : <OtherSoftSkillBars />
            }
        </>
    )
}

const FrontendSkillBars = () => {
    return (
        <>
            <SkillBar title="HTML" percent="85%" />
            <SkillBar title="CSS" percent="90%" />
            <SkillBar title="Javascript" percent="85%" />
            <SkillBar title="React.js" percent="85%" />
            <SkillBar title="Tailwind" percent="90%" />
            <SkillBar title="Transcript" percent="80%" />
            <SkillBar title="Bootstrap" percent="60%" />
        </>
    )
}

const BackendSkillBars = () => {
    return (
        <>
            <SkillBar title="Node.js" percent="85%" />
            <SkillBar title="Express" percent="85%" />
            <SkillBar title="MongoDB" percent="85%" />
            <SkillBar title="JWT" percent="85%" />
        </>
    )
}

const EmbeddedSkillBars = () => {
    return (
        <>
            <SkillBar title="C" percent="85%" />
            <SkillBar title="C++" percent="80%" />
            <SkillBar title="Atmel AVR " percent="75%" />
            <SkillBar title="STM MCU" percent="65%" />
            <SkillBar title="Communication protocols (I2C, SPI, USART)" percent="85%" />
            <SkillBar title="Register level programming" percent="80%" />
            <SkillBar title="ESP8266 and ESP32" percent="70%" />
        </>
    )
}

const OtherSoftSkillBars = () => {
    return (
        <>
            <SkillBar title="JAVA" percent="75%" /> 
            <SkillBar title="Git" percent="80%" />
            <SkillBar title="Circuit Designing" percent="85%" />
            <SkillBar title="Fusion 360" percent="80%" />
            <SkillBar title="Visual Studio Code" percent="80%" />
            <SkillBar title="Figma" percent="70%" />
        </>
    )
}

const SkillBar = ({ title, percent }) => {
    return (
        <>
            <div className='text-xl'>{title}</div>
            <div className='flex items-center gap-8 rounded mb-2 mt-[-8px]'>
                <div className='w-full h-1 bg-gray-50/30 rounded'>
                    <div className={` ${percent==="100%"?"w-[100%]":
                                        percent==="95%"?"w-[95%]":
                                        percent==="90%"?"w-[90%]":
                                        percent==="85%"?"w-[85%]":
                                        percent==="80%"?"w-[80%]":
                                        percent==="75%"?"w-[75%]":
                                        percent==="70%"?"w-[70%]":
                                        percent==="65%"?"w-[65%]":
                                        percent==="60%"?"w-[60%]":"w-[100%]"} h-full bg-blue-600 rounded shadow-`}></div>
                </div>
                <h3>{percent}</h3>
            </div>

        </>

    )
}




export default SkillBars