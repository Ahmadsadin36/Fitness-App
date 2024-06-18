import React from 'react'
import { SubHeader } from '../component'
import header_bg_2 from '../assets/images/header_bg_2.jpg'
import { FaGithubAlt } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section>
      <SubHeader title="Contact Us" image={header_bg_2} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptate numquam consequuntur fugit atque, accusamus eveniet maxime odio amet culpa!
      </SubHeader>
      <section className=' container m-auto'>
        <div className=' mt-9 w-full flex flex-col'> 
          <div className=' w-full flex flex-row items-center justify-center gap-10'>
            <a className=' bg-white p-3 rounded-full' href="https://github.com/Ahmadsadin36">
              <FaGithubAlt className='text-5xl text-gray-800 hover:text-blue-400 duration-300' />
            </a>
            <a className=' bg-white p-3 rounded-full' href="https://www.linkedin.com/in/ahmad-sadin-94b781179/">
              <LuLinkedin className='text-5xl text-blue-800 hover:text-blue-400 duration-300' />
            </a>
            <a className=' bg-white p-3 rounded-full' href="mailto:sadinn.ahmad@gmail.com">
              <SiGmail className='text-5xl text-red-800 hover:text-blue-400 duration-300' />
            </a>
          </div>
          <map className=' w-full mt-9 flex items-center justify-center' name="">
          <iframe className=' w-[95%] rounded-2xl border-2 border-blue-400 shadow-sm shadow-black'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.505012133725!2d11.8923655838994!3d45.40985223208802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477edb664644067d%3A0xb57b9fafc118efea!2sDipartimento%20di%20Ingegneria%20dell&#39;Informazione%20(DEI)!5e0!3m2!1sen!2sit!4v1718644357304!5m2!1sen!2sit"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        
          </map>

        </div>
      </section>

    </section>
  )
}

export default Contact