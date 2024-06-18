import React from 'react'
import { GiCrown } from "react-icons/gi";

const SectionHeader = ({title, className}) => {
  return (
    
        <div className={`${className} flex flex-row items-center justify-center gap-2 p-1`}>
        <GiCrown className={` text-yellow-500 text-3xl`} />
        <h1 className={` text-blue-300 font-semibold text-2xl`} >{title}</h1>
        </div>
    
  )
}

export default SectionHeader