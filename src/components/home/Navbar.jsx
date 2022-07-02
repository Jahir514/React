import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSnowflake, faRestroom, faPowerOff, faOutdent, faSchoolFlag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full bg-gray-800 font-poppins'>
            <div className="container flex items-center text-white text-lg font-light">
                <div className='lg:w-[300px] flex items-center bg-primary  py-3 px-8 cursor-pointer relative group'>
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span>All Categories</span>
                    <div className='absolute w-full bg-white shadow-md py-3 left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transition'>
                        <ul className='divide-y-2'>
                            <li>
                                <Link to="" className='text-gray-400 text-[16px] flex items-center px-6 pb-3'>
                                    <FontAwesomeIcon icon={faRestroom} className='mr-6 text-primary' /> 
                                    <span>Bedroom</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='text-gray-400 text-[16px] flex items-center px-6 py-3'>
                                    <FontAwesomeIcon icon={faSchoolFlag} className='mr-6 text-primary' /> 
                                    <span>Sofa</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='text-gray-400 text-[16px] flex items-center px-6 py-3'>
                                    <FontAwesomeIcon icon={faPowerOff} className='mr-6 text-primary' /> 
                                    <span>Office</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='text-gray-400 text-[16px] flex items-center px-6 py-3'>
                                    <FontAwesomeIcon icon={faOutdent} className='mr-6 text-primary' /> 
                                    <span>Outdoor</span> 
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='text-gray-400 text-[16px] flex items-center px-6 pt-3'>
                                    <FontAwesomeIcon icon={faSnowflake} className='mr-6 text-primary' /> 
                                    <span>Matress</span> 
                                </Link>
                            </li>
                        </ul>
                    </div>
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
