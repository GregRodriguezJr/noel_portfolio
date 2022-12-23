import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed w-full left-0 top-0 z-[999]'>
        <div className='flex items-center justify-between bg-[#282c34]'>
            <div className='mx-7'>
                <h4 className='text-4xl uppercase font-bold text-white'>
                    No<span>&euml;</span>l
                </h4>
            </div>
            <div className='text-gray-500 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full'>
                <ul className='flex items-center gap-1 py-2 text-lg'>
                    <li className='px-5 uppercase hover:text-[#0b1596]'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='px-5 uppercase hover:text-[#0b1596]'>
                        <a href="#albums">albums</a>
                    </li>
                    <li className='px-5 uppercase hover:text-[#0b1596]'>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar