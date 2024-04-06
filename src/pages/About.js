import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh] my-[5vh] mx-2 sm:mx-7 text-[color:var(--text-color)]">
      <div className="w-full min-h-[90vh] gap-5 max-w-3xl py-[5rem] px-14 flex flex-col justify-between">
        <div className="font-[500]">
            <div className='flex gap-10'>
                <img src='./avatar.png' alt='avatar' className='rounded-md w-[30%] h-[30%]'></img>
                <div>
                    <p className="sm:mt-6 font-bold text-2xl">デファクト</p>
                    <p className="opacity-70">Nenad Petrović • @defakuto</p>
                    <p className="mt-4 opacity-70 line-clamp-2 md:line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat est sed odio egestas varius. Vivamus a magna dui. Donec ac est odio.</p>
                </div>
            </div>
            <hr className='mt-10 mb-10'></hr>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat est sed odio egestas varius. Vivamus a magna dui. Donec ac est odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc hendrerit accumsan convallis. Suspendisse potenti. Nullam tempor, lacus sed volutpat mollis, metus nunc aliquet nibh, sed viverra felis risus eget tortor. Fusce rutrum metus eget leo mollis accumsan. Nam euismod justo id molestie dignissim. Vivamus a magna libero. Nulla quis metus molestie, maximus sapien eu, tempus leo.
            <br />
            <br />
            Praesent molestie ultrices urna, vel gravida dui viverra sed. Quisque volutpat blandit orci, non malesuada sapien bibendum sit amet. Fusce feugiat, lectus nec ullamcorper rhoncus, lacus mauris aliquet augue, eget iaculis neque arcu eget dui. Proin tincidunt cursus elit consequat pulvinar. Maecenas blandit aliquam vehicula. Sed aliquam risus vel tincidunt laoreet.</p>
        </div>
        <div className="flex gap-3">
            <Link to="/"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">{'<'}</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About