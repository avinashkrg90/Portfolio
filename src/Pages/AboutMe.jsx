import React, {useEffect} from 'react'
import aboutUsIcon from '../assets/information.png'
import pdfUrl from '../assets/Avinash_Resume.pdf'
import { useInView } from "react-intersection-observer";

const AboutMe = ({ aboutmeRef, setActiveNavMenu }) => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveNavMenu("about-us");
    }
  }, [inView])

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div ref={aboutmeRef} className="w-full flex justify-center items-center gap-3">
        <h1 className='text-black font-bold text-3xl'>ABOUT ME</h1>
        <img className='w-10' src={aboutUsIcon} alt="Icon" />
      </div>
      <div ref={ref}>
        <div className='w-full mb-16'>
          <h1 className='text-4xl'>Hi, <span className='text-4xl'>👋</span></h1>
          <h4 className='text-3xl text-white'>I'm Avinash</h4>
          <h4 className='text-3xl text-orange-300'>(Full-Stack Developer)</h4>
          <p className='leading-7 text-justify text-gray-200 text-md'>I'm highly motivated and inspired science post-graduate with over 5 years of experience
            in circuit designing, firmware development, and embedded systems. I have also worked on MERN stack Web
            development with frontend, backend and database. I have strong passion for solving problems
            with coding and believe myself to be creative. I am facinated by the world of automation, and artificial intelligence,
            and want to contribute towards this with my scientific and engineering skills.</p>

          {/* <hr /> */}
          <p className='my-3 text-sky-200 text-3xl text-justify'>I am currently looking for a full-time role as a Fullstack (MERN) Developer or as an Embedded Systems Engineer.</p>
          <h4 className='text-xl text-orange-300 text-center font-semibold'>Download my Resume below</h4>
          <button onClick={onButtonClick} className='bg-orange-400 m-auto block p-3 text-lg rounded-lg mt-2 cursor-pointer select-none duration-300 active:scale-90 hover:bg-orange-500'>Download Resume</button>
        </div>
      </div>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon button">
<g id="container">
<g clip-path="url(#clip0_2_114)">
<rect x="4" y="4" width="40" height="40" rx="20" fill="#65558F"/>
<g id="state-layer">
<g id="Icon">
<path id="icon" d="M21.25 34L20.85 30.8C20.6333 30.7167 20.4292 30.6167 20.2375 30.5C20.0458 30.3833 19.8583 30.2583 19.675 30.125L16.7 31.375L13.95 26.625L16.525 24.675C16.5083 24.5583 16.5 24.4458 16.5 24.3375V23.6625C16.5 23.5542 16.5083 23.4417 16.525 23.325L13.95 21.375L16.7 16.625L19.675 17.875C19.8583 17.7417 20.05 17.6167 20.25 17.5C20.45 17.3833 20.65 17.2833 20.85 17.2L21.25 14H26.75L27.15 17.2C27.3667 17.2833 27.5708 17.3833 27.7625 17.5C27.9542 17.6167 28.1417 17.7417 28.325 17.875L31.3 16.625L34.05 21.375L31.475 23.325C31.4917 23.4417 31.5 23.5542 31.5 23.6625V24.3375C31.5 24.4458 31.4833 24.5583 31.45 24.675L34.025 26.625L31.275 31.375L28.325 30.125C28.1417 30.2583 27.95 30.3833 27.75 30.5C27.55 30.6167 27.35 30.7167 27.15 30.8L26.75 34H21.25ZM23 32H24.975L25.325 29.35C25.8417 29.2167 26.3208 29.0208 26.7625 28.7625C27.2042 28.5042 27.6083 28.1917 27.975 27.825L30.45 28.85L31.425 27.15L29.275 25.525C29.3583 25.2917 29.4167 25.0458 29.45 24.7875C29.4833 24.5292 29.5 24.2667 29.5 24C29.5 23.7333 29.4833 23.4708 29.45 23.2125C29.4167 22.9542 29.3583 22.7083 29.275 22.475L31.425 20.85L30.45 19.15L27.975 20.2C27.6083 19.8167 27.2042 19.4958 26.7625 19.2375C26.3208 18.9792 25.8417 18.7833 25.325 18.65L25 16H23.025L22.675 18.65C22.1583 18.7833 21.6792 18.9792 21.2375 19.2375C20.7958 19.4958 20.3917 19.8083 20.025 20.175L17.55 19.15L16.575 20.85L18.725 22.45C18.6417 22.7 18.5833 22.95 18.55 23.2C18.5167 23.45 18.5 23.7167 18.5 24C18.5 24.2667 18.5167 24.525 18.55 24.775C18.5833 25.025 18.6417 25.275 18.725 25.525L16.575 27.15L17.55 28.85L20.025 27.8C20.3917 28.1833 20.7958 28.5042 21.2375 28.7625C21.6792 29.0208 22.1583 29.2167 22.675 29.35L23 32ZM24.05 27.5C25.0167 27.5 25.8417 27.1583 26.525 26.475C27.2083 25.7917 27.55 24.9667 27.55 24C27.55 23.0333 27.2083 22.2083 26.525 21.525C25.8417 20.8417 25.0167 20.5 24.05 20.5C23.0667 20.5 22.2375 20.8417 21.5625 21.525C20.8875 22.2083 20.55 23.0333 20.55 24C20.55 24.9667 20.8875 25.7917 21.5625 26.475C22.2375 27.1583 23.0667 27.5 24.05 27.5Z" fill="white"/>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_2_114">
<rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
</clipPath>
</defs>
</svg>
      <div className='mb-16 w-8/12 mx-auto'>
        <hr />
      </div>

    </>
  )
}

export default AboutMe