import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {links} from '../constant/data';
import logo from '../assets/images/logo.png';


const Footer = () => {
    // current date
    const date = new Date().getFullYear();
  return (
    <footer className=' w-full mt-16 p-3 bg-blue-400 flex flex-col items-start justify-start gap-3'>
        <div className=' w-full grid md:grid-rows-1 md:grid-cols-3 grid-rows-3 grid-cols-1 gap-3'>
            <div className=' flex-1 flex flex-col items-center justify-center gap-3'>
               <div className=' w-full flex items-center justify-center flex-row md:flex-col gap-3 '>
               <Link to='/'><img src={logo} alt="logo" className=' w-36' /></Link>
              <div className=' flex gap-1'>
              <a className=' group bg-blue-950 p-2 rounded-full' href="https://github.com/Ahmadsadin36">
                    <FaGithub className=' text-white text-2xl group-hover:text-blue-300 duration-300' />
                </a>
                <a className=' group bg-blue-950 p-2 rounded-full' href="https://www.linkedin.com/in/ahmad-sadin-94b781179/">
                    <FaLinkedinIn className=' text-white text-2xl group-hover:text-blue-300 duration-300' />
                </a>
              </div>
               </div>
            </div>
            <div className=' flex-1 flex items-center justify-center flex-row flex-wrap border-b border-white border-t border-t-white md:border-t-0 md:border-b-0 md:border-r md:border-l md:border-r-white md:border-l-white'>
                <ul className=' flex items-center justify-center flex-row flex-wrap-reverse gap-3'>
                    {links.map((link)=>{
                        const {name, path} = link;
                        return(
                            <li key={name} className=' hover:-translate-y-1 duration-300'>
                                <Link className=' hover:text-blue-950 hover:border-b hover:border-b-white pb-1 duration-300 md:text-xl' to={path}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className=' flex-1 flex items-center justify-center flex-col'>
            <p className=' w-full text-center'>© {date} <Link className=' hover:text-blue-950 duration-300' to='/'>Company</Link> | All Rights Reserved</p>
            <p className=' capitalize text-blue-950'>Developed by <a className=' hover:translate-x-2 hover:text-white inline-block duration-300' href="https://github.com/Ahmadsadin36">Ahmad Sadin</a></p>
        </div>
        </div>
    </footer>
  )
}

export default Footer