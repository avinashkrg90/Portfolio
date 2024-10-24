import React from 'react'
import arrowIcon from '../assets/right-arrow.png'

const ProjectCard = ({ project }) => {

    return (
        <>
            <div className='w-[260px] bg-gray-50/40 p-2 rounded-lg'>
                <img className='cursor-pointer w-full rounded-lg hover:scale-110 duration-200 shadow-xl' src={`./src/assets/projectsImage/${project.thumbnail}`} alt="image" />
                <h3 className='text-lg text-white font-semibold text-center mt-4'>{project.title}</h3>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center cursor-pointer gap-1'>
                        <h3 className='text-black text-lg hover:text-gray-300'>Know more </h3>
                        <img className='w-3 h-3' src={arrowIcon} alt=">" />
                    </div>
                    <div>
                        <button className='px-2 py-[3px] bg-orange-500 rounded-lg cursor-pointer duration-200 hover:bg-orange-200 hover:text-orange-700 active:scale-90'>Demo</button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default ProjectCard


