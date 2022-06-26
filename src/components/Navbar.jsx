import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand.</h1>
        </div>
        <div>
          <ul className='hidden md:flex text-2xl'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='bg-transparent rounded-md mr-4 text-2xl p-3 text-indigo-600 border-transparent hover:text-indigo-600'>Sign In</button>
          <button className='hover:bg-transparent rounded-md text-2xl p-3 hover:text-indigo-600'>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute w-full px-8 bg-zinc-200 text-left text-2xl'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col py-4'>
          <button className='bg-transparent rounded-md mb-4 text-2xl p-3 hover:bg-indigo-600'>Sign In</button>
          <button className='hover:bg-transparent rounded-md text-2xl p-3 hover:text-indigo-600'>Sign Up</button>
        </div>
      </ul>
    </div>

  )
}

export default Navbar