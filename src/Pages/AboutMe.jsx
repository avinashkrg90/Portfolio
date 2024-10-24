import React from 'react'
import aboutUsIcon from '../assets/information.png'

const AboutMe = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-3">
        <h1 className='text-black font-bold text-3xl'>ABOUT ME</h1>
        <img className='w-10' src={aboutUsIcon} alt="Icon" />
      </div>
      <div className='w-full mb-24'>
        <h1 className='text-4xl'>Hi, <span className='text-4xl'>👋</span></h1>
        <h4 className='text-3xl text-white'>I'm Avinash</h4>
        <h4 className='text-3xl text-orange-300'>(Full-Stack Developer)</h4>
        <p className='leading-relaxed text-justify text-gray-200 text-lg'>I'm highly motivated and inspired science post-graduate with over 5 years of experience
          in circuit designing, firmware development, and embedded systems. I have also worked on MERN stack Web
          development with frontend, backend and database. I have strong passion for solving problems
          with coding and believe myself to be creative. I am facinated by the world of automation, and artificial intelligence,
          and want to contribute towards this with my scientific and engineering skills.</p>

        {/* <hr /> */}
        <p className='my-3 text-sky-200 text-3xl text-justify'>I am currently looking for a full-time role as a Fullstack (MERN) Developer or as an Embedded Systems Engineer.</p>
        <h4 className='text-xl text-black text-center'>Download my Resume below</h4>
        <button className='bg-orange-400 m-auto block p-3 text-lg rounded-lg mt-2 cursor-pointer select-none duration-300 active:scale-90 hover:bg-orange-500'>Download Resume</button>
      </div>
      {/* <hr /> */}
    </>
  )
}

export default AboutMe