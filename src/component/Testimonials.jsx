import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import { testimonials } from '../constant/data'
import { ImQuotesLeft } from "react-icons/im";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { TbSquareRoundedArrowLeft } from "react-icons/tb";
import { useState } from 'react';
import { useEffect } from 'react';


const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]
    const prevNext = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > testimonials.length - 1) {
                index = 0
            }
            return index
        })
    }
    const pervBefore = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = testimonials.length - 1
            }
            return index
        })
    }
    //auto next
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > testimonials.length - 1) {
                    index = 0
                }
                return index
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])


  return (
    <section className=' w-full mt-9 p-3 flex flex-col items-center justify-center gap-3 '>
        <div className=' w-full flex justify-center md:justify-start'>
        <SectionHeader title='Testimonials' />
        </div>
        <Card className= " mt-9  border bg-blue-400  border-blue-50 rounded-ss-3xl rounded-ee-3xl  flex flex-col items-center justify-start gap-2 md:max-w-[60%] shadow-sm shadow-blue-950 text-blue-950 hover:text-blue-50 hover:bg-transparent transition-all duration-300">
            <div className=' -translate-y-16 w-full flex items-center justify-center'>
                <img className=' object-cover shadow-sm shadow-blue-950 text-white rounded-full bg-blue-950 border border-blue-50 w-20 h-20' src={avatar} alt={name} />
            </div>
            <p className=' w-full'>{quote}</p>
            <h4 className=' w-full'>{name}</h4>
            <small className=' w-full'>{job}</small>
        </Card>
        <div className=' w-full flex items-center justify-center gap-3'>
            <button onClick={prevNext}>
                <TbSquareRoundedArrowLeft className='w-8 h-8 bg-transparent text-blue-400 hover:text-white'/>
            </button>
            <button onClick={pervBefore}>
                <TbSquareRoundedArrowRight className='w-8 h-8 text-blue-400 hover:text-white'/>
            </button>
        </div>

     
    </section>

  )
}

export default Testimonials