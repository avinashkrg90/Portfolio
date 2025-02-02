import React, { useState, useEffect } from 'react'
import projectsIcon from '../assets/project.png'
import { projectsData } from '../assets/projectsData.js'
import ProjectCard from '../Components/ProjectCard.jsx'
import { useInView } from "react-intersection-observer";

const Projects = ({ projectRef, setActiveNavMenu }) => {

    const [projectCategorySelected, setProjectCategorySelected] = useState("all")

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveNavMenu("projects");
        }
    }, [inView])

    return (
        <>
            <div ref={projectRef} className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>PROJECTS</h1>
                <img className='w-10' src={projectsIcon} alt="Icon" />
            </div>

            <div ref={ref}>
                <div className='w-full mb-24'>
                    <div className='w-full my-6'>
                        <ul className='flex justify-center items-center gap-4 text-lg'>
                            <li onClick={() => setProjectCategorySelected("all")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected === 'all' ? 'text-orange-500' : null}`}>All</li>
                            <li onClick={() => setProjectCategorySelected("frontend")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected === 'frontend' ? 'text-orange-500' : null}`}>Just Frontend</li>
                            <li onClick={() => setProjectCategorySelected("backend")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected === 'backend' ? 'text-orange-500' : null}`}>Just Backend</li>
                            <li onClick={() => setProjectCategorySelected("mern")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected === 'mern' ? 'text-orange-500' : null}`}>MERN</li>
                            <li onClick={() => setProjectCategorySelected("others")} className={`cursor-pointer hover:text-orange-300 ${projectCategorySelected === 'others' ? 'text-orange-500' : null}`}>Other</li>
                        </ul>
                    </div>
                    <div className='flex flex-wrap justify-evenly gap-6 gap-y-8'>
                        <ProjectCards projectCategory={projectCategorySelected} />
                    </div>
                </div>
            </div>

            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

const ProjectCards = ({ projectCategory }) => {
    return (
        <>
            {
                projectsData.map((project) => {
                    if (projectCategory === 'all') {
                        return <ProjectCard key={project.title} project={project} />
                    }
                    else if (project.categories.includes(projectCategory)) {
                        return <ProjectCard key={project.title} project={project} />
                    }
                })
            }
        </>
    )
}


export default Projects