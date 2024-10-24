import React, { useState } from 'react'
import projectsIcon from '../assets/project.png'
import projectsData from '../assets/projectsData.js'

const Projects = () => {

    const [projectCategorySelected, setProjectCategorySelected] = useState("all")
    const projectArray = [];

    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>PROJECTS</h1>
                <img className='w-10' src={projectsIcon} alt="Icon" />
            </div>

            <div className='w-full mt-4'>
                <div className='w-full'>
                    <ul className='flex justify-center items-center gap-4 text-lg'>
                        <li onClick={()=>setProjectCategorySelected("all")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected==='all'?'text-orange-400':null}`}>All</li>
                        <li onClick={()=>setProjectCategorySelected("frontend")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected==='frontend'?'text-orange-400':null}`}>Just Frontend</li>
                        <li onClick={()=>setProjectCategorySelected("backend")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected==='backend'?'text-orange-400':null}`}>Just Backend</li>
                        <li onClick={()=>setProjectCategorySelected("mern")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected==='mern'?'text-orange-400':null}`}>MERN</li>
                        <li onClick={()=>setProjectCategorySelected("others")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected==='others'?'text-orange-400':null}`}>Other</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Projects