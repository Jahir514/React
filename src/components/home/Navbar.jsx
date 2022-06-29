import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full bg-gray-800 font-poppins'>
            <div className="container flex items-center text-white text-lg font-light">
                <div className='lg:w-[300px] flex items-center justify-center bg-primary space-x-2 py-3 px-6 cursor-pointer'>
                    <span className=''>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span>All Categories</span>
                </div>
                <div className='w-full flex items-center justify-between pl-8'>
                    <ul className='flex items-center space-x-8 capitalize'>
                        <Link to="/" className='text-gray-200 hover:text-white transition'>Home</Link>
                        <Link to="/shop" className='text-gray-200 hover:text-white transition'>Shop</Link>
                        <Link to="/about-us" className='text-gray-200 hover:text-white transition'>About Us</Link>
                        <Link to="/contact-us" className='text-gray-200 hover:text-white transition'>Contact us</Link>
                    </ul>
                    <div>
                        <Link to="/login" className='text-gray-200 hover:text-white transition'>Login/Register</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
