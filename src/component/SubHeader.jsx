import React from 'react'

const SubHeader = ({title, children, image}) => {
  return (
    <header className=' w-full flex items-center justify-center h-80 border-b-2 border-b-blue-300'>
        <div className=' relative w-full h-full flex flex-row flex-wrap'>
        <img className=' -z-10 absolute top-0 left-0 w-full h-full opacity-55 object-contain md:object-contain bg-black hover:opacity-50' src={image} alt="" />
        <div className=' bg-gradient-to-r from-slate-600 to-transparent rounded-e-xl h-full w-1/2 flex items-center justify-center'>
            <h1 className=' text-4xl font-bold text-blue-50'>{title}</h1>
        </div>
        <div className=' bg-gradient-to-l from-blue-400 to-transparent rounded-ss-3xl h-full w-1/2 flex items-center justify-center'>
        <p className=' text-white '>{children}</p>
        </div>
        </div>
    </header>
  )
}

export default SubHeader