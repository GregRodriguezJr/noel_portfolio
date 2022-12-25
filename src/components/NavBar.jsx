import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function NavBar() {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
    <div className="fixed w-full h-[80px] bg-[#282c34] z-[100] shadow-xl">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <p className="text-white text-3xl">
                NO<span>&Euml;</span>L
            </p>
            <div className="hidden md:flex">
                <ul className="flex items-center">
                    <li className="px-5">
                        <a className="uppercase text-white hover:underline" href="#main">Home</a>
                    </li>
                    <li className="px-5">
                        <a className="uppercase text-white hover:underline" href="#albums">Albums</a>
                    </li>
                    <li className="px-5">
                        <a className="uppercase text-white hover:underline" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
            <div 
                onClick={handleNav} 
                className='block md:hidden'
            >
                {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white'/>}
            </div>
            <div 
                className={
                    nav 
                    ? 'w-full absolute top-[80px] left-0 flex justify-center text-center text-white bg-[#282c34] md:hidden ease-in duration-300'
                    : 'absolute left-[-100%] text-white md:hidden'
                }
            >
                <ul>
                    <li className="py-5" onClick={handleNav}>
                        <a className="uppercase text-white hover:underline" href="#main">Home</a>
                    </li>
                    <li className="py-5" onClick={handleNav}>
                        <a className="uppercase text-white hover:underline" href="#albums">Albums</a>
                    </li>
                    <li className="py-5" onClick={handleNav}>
                        <a className="uppercase text-white hover:underline" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar;
