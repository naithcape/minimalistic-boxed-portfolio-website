import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    const data = () => [
      {url: './websites/rentacardndx-website-new-dark-and-light.jpg',imageUrl: './websites/rentacardndx-website-new-dark-and-light.jpg', title: 'Rent-A-Car DNDX', type: 'web development', description: 'Discover a dynamic website in React.'},
      {url: './websites/rentacardndx-website-old.jpg',imageUrl: './websites/rentacardndx-website-old.jpg', title: 'Rent-A-Car DNDX', type: 'web development', description: 'Discover a static website, utilizing HTML, CSS, and JavaScript.'},
      {url: './websites/varmontaza-website-dark-and-light.jpg',imageUrl: './websites/varmontaza-website-dark-and-light.jpg', title: 'Var Montaza', type: 'web development', description: 'Discover a static website, utilizing HTML, CSS, and JavaScript.'},
      {url: './websites/sunnyside-prototype.jpg',imageUrl: './websites/sunnyside-prototype.jpg', title: 'SunnySide Prototype', type: 'web development', description: 'Dynamic website in React, canceled by client.'},
      // desing shirts
      {url: './desing/sobpyy-shirt1.jpg',imageUrl: './desing/sobpyy-shirt1.jpg', title: 'Sobpyy Shirts', type: 'shirt design', description: 'Shirt uniquely designed to suit client desires.'},
      {url: './desing/sobpyy-shirt2.jpg',imageUrl: './desing/sobpyy-shirt2.jpg', title: 'Sobpyy Shirts', type: 'shirt design', description: 'Shirt uniquely designed to suit client desires.'},
      {url: './desing/sobpyy-shirt3.jpg',imageUrl: './desing/sobpyy-shirt3.jpg', title: 'Sobpyy Shirts', type: 'shirt design', description: 'Shirt uniquely designed to suit client desires.'},
      {url: './desing/sobpyy-shirt4.jpg',imageUrl: './desing/sobpyy-shirt4.jpg', title: 'Sobpyy Shirts', type: 'shirt design', description: 'Shirt uniquely designed to suit client desires.'},
      // desing logo
      {url: './desing/cyf-logo.jpg',imageUrl: './desing/cyf-logo.jpg', title: 'CYFormat', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/routing-logo.jpg',imageUrl: './desing/routing-logo.jpg', title: 'Routing Hosting', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/nordkapp-logo.jpg',imageUrl: './desing/nordkapp-logo.jpg', title: 'Nordkapp OGC', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/zephyrs-logo.jpg',imageUrl: './desing/zephyrs-logo.jpg', title: 'Zephyrs Team', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/defactodivision-logo.jpg',imageUrl: './desing/defactodivision-logo.jpg', title: 'Defacto Division', type: 'logo designt', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/whrlbe-logo.jpg',imageUrl: './desing/whrlbe-logo.jpg', title: 'Whrlbe', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
      {url: './desing/pulse-logo.jpg',imageUrl: './desing/pulse-logo.jpg', title: 'Pulse', type: 'logo design', description: 'Logo uniquely designed to suit client desires.'},
    ];
  return (
    <div className="flex items-center justify-center min-h-[90vh] my-[5vh] mx-2 sm:mx-7 text-[color:var(--text-color)]">
      <div className="w-full min-h-[90vh] gap-5 max-w-3xl py-[2rem] sm:py-[5rem] px-5 sm:px-14 flex flex-col justify-between">
        <div className="font-[500]">
            {data().map((item) => (
                <div>
                    <div className='flex gap-10'>
                        <a href={item.url} className='w-[30%] h-[30%]'><img src={item.imageUrl} alt='avatar' className='rounded-md'></img></a>
                        <div>
                            <p className="sm:mt-6 font-bold text-2xl">{item.title}</p>
                            <p className="opacity-70">{item.type}</p>
                            <p className="hidden sm:block mt-4 opacity-70 line-clamp-2 md:line-clamp-3">{item.description}</p>
                        </div>
                    </div>
                    <p className="sm:hidden md:hidden font-[400] mt-5 opacity-70 line-clamp-2 md:line-clamp-3">{item.description}</p>
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