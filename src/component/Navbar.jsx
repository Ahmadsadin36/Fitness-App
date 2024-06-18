import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import {links} from '../constant/data'
import { FaBarsStaggered } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false);
      };






  return (
    <nav className='w-full bg-blue-400 p-3 flex flex-row items-center justify-between'>
        <Link to= "/" className="w-[20%] flex items-center justify-start">
            <img className=' w-24' src={Logo} alt="logo" />
        </Link>
        <ul className=' hidden md:w-[80%] md:h-full md:flex md:items-center md:justify-end gap-3 mr-2'>
            {links.map((link, index) => {
            
            return (
                <li key={index} className='hover:-translate-y-1 transition-all duration-300'>
                <NavLink to={link.path} exact className={({ isActive }) =>
            ` w-full h-full text-blue-950 hover:border-b hover:border-b-white hover:text-yellow-500 pb-1 ${
              isActive ? 'text-yellow-500 border-b border-b-white' : 'text-blue-950'
            }`
          }>{link.name}</NavLink>
                </li>
            )
            })}
        </ul>
        <button className=' w-8 h-full flex items-center justify-center md:hidden' onClick={handleOpen}>
        <FaBarsStaggered className=' text-blue-900 text-2xl' />
        </button>
        <div className={ open ? 'block absolute top-0 right-0 z-50' : 'hidden'}>
            {open && <div className=' fixed top-0 right-0 w-full h-full bg-blue-300 flex flex-col items-center justify-center'>
                <button onClick={handleOpen} className=' absolute top-5 right-5 w-8 h-8 flex items-center justify-center '>
                    <CgClose className=' text-blue-900 text-5xl' />
                </button>
                <ul className=' flex flex-col items-center justify-center gap-4 text-2xl'>
                    {links.map((link, index) => {
                        return (
                            <li key={index} className='hover:-translate-y-1 transition-all duration-300'>
                                <NavLink onClick={handleClose} to={link.path} exact className={({ isActive }) =>
                                    ` w-full h-full text-blue-950 hover:border-b hover:border-b-white hover:text-yellow-500 pb-1 ${
                                    isActive ? 'text-yellow-500 border-b border-b-white' : 'text-blue-950'
                                    }`
                                }>{link.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar