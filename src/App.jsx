import React, { useEffect, useState } from 'react'
import './app.css'
import Introduction from './Components/Introduction'
import MainWebsite from './Pages/MainWebsite'
import mypic from './assets/mybnwpic.png'

const App = () => {

    const [runningIntro, setRunningIntro] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setRunningIntro(false)
        }, 10000)
    }, [])

    return (
        <>
            {/* <div className={`"introductionContainer" ${runningIntro ? "visible": "invisible"}`}>
                <Introduction />
            </div> */}

            <div className={`"mainWebsiteContainer" ${runningIntro ? "mainInvisible": "mainVisible"}`}>
                <MainWebsite />
            </div>

            <div class="area" >
                <div className='w-full h-[100vh]'>
                    <img className='h-full' src={mypic} alt="" />
                </div>
                {/* <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
            </div >
        </>
    )
}

export default App