import React from 'react'
import valuesImg from '../assets/images/values.jpg'
import SectionHeader from './SectionHeader'
import Card from './Card'
import { values } from '../constant/data'
import {SiOpenaigym} from 'react-icons/si'

const Values = () => {
  return (
    <section className=' mt-9 p-3 w-full flex flex-col-reverse md:flex-row gap-5 justify-center items-center'>
        <div className=' flex-1 flex flex-col justify-center items-center'>
            <div className=' w-full flex items-center justify-center md:items-center md:justify-start mb-2'>
            <SectionHeader title='Our Values' />
            </div>
            <div className=' w-full flex flex-row flex-wrap justify-center items-center gap-2'>
                {values.map((value, index) => (
                    <Card className="bg-blue-400 rounded-2xl flex-1 max-h-64 flex flex-col justify-start items-start gap-2 hover:bg-transparent border border-blue-200 group " key={index}>
                        <SiOpenaigym className=' group-hover:rotate-180 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-2xl text-white -translate-y-8 -translate-x-6' />
                        <h3 className=' text-xl font-semibold w-full text-left'>{value.title}</h3>
                        <p className=''>{value.desc}</p>
                    </Card>
                ))}

        </div>
        </div>
        <div className=' flex-1 flex items-center justify-center'>
            <img className=' w-96 h-96  object-cover rounded-2xl border-2 border-blue-300  saturate-50 hover:saturate-0' src={valuesImg} alt="" />
        </div>
    </section>
  )
}

export default Values