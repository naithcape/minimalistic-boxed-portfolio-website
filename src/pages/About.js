import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh] my-[5vh] mx-2 sm:mx-7 text-[color:var(--text-color)]">
      <div className="w-full min-h-[90vh] gap-5 max-w-3xl py-[2rem] sm:py-[5rem] px-5 sm:px-14 flex flex-col justify-between">
        <div className="font-[500]">
            <div className='flex gap-10'>
                <img src='./avatar.png' alt='avatar' className='rounded-md w-[30%] h-[30%]'></img>
                <div>
                    <p className="sm:mt-6 font-bold text-2xl">デファクト</p>
                    <p className="opacity-70">Nenad Petrović • @defakuto</p>
                    <p className="hidden sm:block mt-4 opacity-70 line-clamp-2 md:line-clamp-3">Born in the Serbia, 1999 marked my journey.</p>
                </div>
            </div>
            <p className="sm:hidden md:hidden font-[400] mt-5 opacity-70 line-clamp-2 md:line-clamp-3">Born in the Serbia, 1999 marked my journey.</p>
            <hr className='mt-10 mb-10'></hr>
            <p className="mt-4">Adrenaline and music fuel my passion for racing, tech, and open-source.<br /> 
            I'm set for unforgettable adventures.<br />
            I've always been driven by an insatiable appetite for adrenaline and a deep love for music that pulses through my veins like a second heartbeat.<br />
            From the moment I could grip a handlebar, I was destined for the thrill of supermoto, the precision of racing, and the wild rush of drifts, rallies, and track circuits.<br />
            But my passions extend far beyond the asphalt. In the world of development, I'm not just a coder; I'm a visionary, constantly pushing the boundaries of what's possible. <br />
            I find solace in the collaborative spirit of open-source projects, where I eagerly contribute my skills and insights to help shape the future of technology.<br />
            Growing up amidst the rich tapestry of Serbian culture, I've come to value community and camaraderie above all else.<br />
            I believe in the power of connection, in sharing knowledge and experiences with others, and in lifting each other up as we navigate the twists and turns of life's journey.
            <br />
            <br />
            Boundless adventures call out to me, and I eagerly leap into the thrilling unknown.<br /> Let the journey begin.</p>
        </div>
        <div className="flex gap-3">
            <Link to="/"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">{'<'}</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About