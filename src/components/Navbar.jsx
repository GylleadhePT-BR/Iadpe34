import React from 'react'
import { BsInstagram, BsBellFill, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { MdMenu, MdMenuOpen } from 'react-icons/md'
import { FaGripfire } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between items-center p-2  rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 sm:mx-12 mx-0 my-2 drop-shadow-lg text-bold'>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className='socials flex flex-row items-center justify-between sm:gap-4 gap-1'>
                <a className='btn btn-ghost btn-square text-white'>
                    <BsInstagram size={20} />
                </a>
                <a className='btn btn-ghost btn-square text-white'>
                    <BsFacebook size={20} />
                </a>
                <a className='btn btn-ghost btn-square text-white'>
                    <BsTwitter size={20} />
                </a>
                <a className='btn btn-ghost btn-square text-white'>
                    <BsYoutube size={20} />
                </a>
            </div>

           <div>
                <label tabIndex={0} className="btn btn-ghost btn-square">
                    <FaGripfire size={28} className="text-white"/>
                </label>
            </div>
        </nav>
    )
}

export default Navbar