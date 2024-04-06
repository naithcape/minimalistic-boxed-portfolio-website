import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    const data = () => [
        {imageUrl: './avatar.png', title: 'Var Montaža', type: 'web development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {imageUrl: './avatar.png', title: 'Var Montaža', type: 'web development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ];
  return (
    <div className="flex items-center justify-center min-h-[90vh] my-[5vh] mx-2 sm:mx-7 text-[color:var(--text-color)]">
      <div className="w-full min-h-[90vh] gap-5 max-w-3xl py-[5rem] px-14 flex flex-col justify-between">
        <div className="font-[500]">
            {data().map((item) => (
                <div>
                    <div className='flex gap-10'>
                        <img src={item.imageUrl} alt='avatar' className='rounded-md w-[30%] h-[30%]'></img>
                        <div>
                            <p className="sm:mt-6 font-bold text-2xl">{item.title}</p>
                            <p className="opacity-70">{item.type}</p>
                            <p className="mt-4 opacity-70 line-clamp-2 md:line-clamp-3">{item.description}</p>
                        </div>
                    </div>
                    <hr className='mt-10 mb-10' />
                </div>
            ))}
        </div>
        <div className="flex gap-3">
            <Link to="/"><button className="bg-[#54a1ff] rounded-md px-3 py-1 text-white font-medium">{'<'}</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects