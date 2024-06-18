import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import { programs } from '../constant/data'
import Button from './Button'
import {SiOpenaigym} from 'react-icons/si'


const Programs = () => {
  return (
    <section className=' w-full p-3 flex flex-col items-center justify-center'>
        <div className=' w-full flex items-center justify-center md:justify-start'>
        <SectionHeader title='Our Programs' />
        </div>
        <div className=' w-full flex flex-row gap-3 flex-wrap items-center justify-center mt-9'>
            {programs.map((program, index) => {
                return (
                    <Card key={index} className=' flex-1 min-w-40 max-w-52 flex items-start justify-start flex-col bg-blue-400 border border-white shadow-md shadow-blue-950 rounded-se-3xl rounded-es-3xl '>
                        <div className=' mb-2'><SiOpenaigym className=' text-xl' /></div>
                        <h3 className='text-lg font-bold text-blue-50'>{program.title}</h3>
                        <p className='text-sm mt-3 mb-5 text-blue-950'>{program.info}</p>
                        <Button className= "" title= "Read more" />
                    </Card>
                )
            })}
        </div>

    </section>
  )
}

export default Programs