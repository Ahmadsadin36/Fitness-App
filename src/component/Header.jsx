import React from 'react'
import Button from './Button'
import mainHeader from '../assets/images/main_header.png'


const Header = () => {
  return (
    <header className=' w-full h-dvh p-3 grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2'>
        <div className=' mt-5 md:mt-0 w-full h-full flex flex-col justify-center items-start gap-3'>
            <h5 className=' text-sm text-yellow-500'># Lorem ipsum dolor sit amet.</h5>
            <h1 className=' text-xl md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet?</h1>
            <p className=' text-sm text-blue-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem dignissimos pariatur aspernatur architecto unde minus quia vero voluptate magni.</p>
            <Button title='Get Started' to='/plans'/>
        </div>
        <div className=' relative w-full h-full flex items-center justify-center'>
            <div className=' blur-sm absolute  bg-yellow-200 rounded-full w-40 h-40'></div>
            <div className=' absolute flex items-center justify-center overflow-hidden'>
                <img className=' w-1/2 h-1/2  hover:translate-x-12 hover:translate-y-5 hover:rotate-45 ' src={mainHeader} alt="" />
            </div>
        </div>

    </header>
  )
}

export default Header