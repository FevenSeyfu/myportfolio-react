import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleclick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* logo */}
        <div>
            <h1 className="text-red-300">
                FevenSeyfu
            </h1>
        </div>
        {/* menu */}
        <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleclick}  className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menue */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 hover:rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2'
                    href="https://www.linkedin.com/in/fevenseyfu/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2'
                    href="https://github.com/FevenSeyfu">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-900 hover:rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2'
                    href="fevensey@gmail.com">
                        E-mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:rounded-2xl'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold text-lg pl-2'
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
     </div>
  )
}

export default Navbar