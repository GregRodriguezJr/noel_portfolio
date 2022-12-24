import React from 'react'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#282c34] w-full h-80 text-center text-white'>
        <div className='max-w-[600px] flex flex-col m-auto'>
        <div>   
            <h2 className='py-20 uppercase'>Connect with me</h2>
        </div>
        <div className="flex justify-evenly">
            <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <a
                    target="_blank"
                    href="https://www.linkedin.com"
                >
                    <FaLinkedinIn className='text-[#0072b1]' />
                </a>
            </div>
            <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <a
                    target="_blank"
                    href="https://www.facebook.com"
                >
                    <FaFacebookF className='text-[#0072b1]' />
                </a>
            </div>
            <div className="rounded-full p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
                <a
                    target="_blank"
                    href="https://www.instagram.com"
                >
                    <FaInstagram className='text-[#0072b1]' />
                </a>
            </div>
        </div>
        </div>
    </div>    
  )
}

export default Contact