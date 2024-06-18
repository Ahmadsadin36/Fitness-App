import React from 'react'

const AboutSections = ({image, title, text, className, className2}) => {
  return (
    <section className={` w-full flex ${className} mt-9 items-center`}>
        <div className=' w-full md:w-1/2 h-full flex items-center justify-center'>
            <img className={` w-52 h-52 border border-white shadow-sm shadow-black object-cover rounded-full ${className2}`} src={image} alt="" />
        </div>
        <div className=' px-2 w-full md:w-1/2 h-full flex flex-col items-center justify-start gap-3'>
            <h2 className=' w-full text-2xl font-bold text-blue-400'>{title}</h2>
            <p className=' w-full text-left text-blue-200'>{text}</p>
        </div>
    </section>
  )
}

export default AboutSections