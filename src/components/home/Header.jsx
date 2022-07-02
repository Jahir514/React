import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="bg-white  py-4 font-poppins shadow-sm">
            <div className="container lg:flex lg:items-center lg:justify-between">
                {/* brands start */}
                <div>
                    <h1 className="text-3xl text-indigo-400">Brands</h1>
                </div>
                {/* search start */}
                <div className="xl:w-full max-w-xl relative">
                    <span className="absolute text-gray-400 text-lg left-4 top-4">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
                    </span>
                    <input type="text" placeholder="search" className="
                    w-full border border-primary border-r-0 
                    text-xl py-3 pl-12 rounded-l-md focus:outline-none" />
                    <button className="bg-primary py-3 px-6 rounded-r-md text-white text-xl text-bold absolute border border-primary hover:bg-transparent hover:text-primary transition">Search</button>
                </div>
                {/* icons */}
                <div className="flex items-center justify-between space-x-5 text-center">
                    <div className="relative text-center">
                        <FontAwesomeIcon icon={faHeart} className="text-2xl text-gray-700 hover:text-primary transition"> </FontAwesomeIcon>
                        <p className="text-xs text-gray-400">Wish list</p>
                        <span className="absolute -top-1 bg-primary right-0 w-5 h-5 text-sm rounded-full flex items-center justify-center text-white">5</span>
                    </div>
                    <div className="relative ">
                        <FontAwesomeIcon icon={faShoppingBasket} className="text-2xl text-gray-700 hover:text-primary transition relative" />
                        <p className="text-xs text-gray-400">Cart</p>
                        <span className="absolute -top-1 bg-primary -right-2 w-5 h-5 text-sm rounded-full flex items-center justify-center text-white">3</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} className="h-6 text-sm text-gray-700 hover:text-primary transition" />
                        <p className="text-xs text-gray-400">Accounts</p>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;