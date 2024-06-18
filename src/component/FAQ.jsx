import React from 'react'
import SectionHeader from './SectionHeader'
import FAQ1 from './FAQ1'
import { faqs } from '../constant/data'


const FAQ = () => {
  return (
    <section className=' w-full p-3 mt-9 flex flex-col items-start'>
     <div className=' w-full flex items-center justify-center md:justify-start'>
     <SectionHeader title='FAQ' />
     </div>
     <div className=' w-full grid grid-cols-1 gap-3 md:grid-cols-2'>
        {
            faqs.map((faq) => {
                return <FAQ1 key={faq.id} {...faq} />
            })
        }
        
        
     </div>
        
    </section>
  )
}

export default FAQ