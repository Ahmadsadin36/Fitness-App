import React from 'react'
import header_bg_4 from '../assets/images/header_bg_4.jpg'
import {plans} from '../constant/data'
import SubHeader from '../component/SubHeader'
import Card from '../component/Card'
import Button from '../component/Button'



const Plans = () => {
  return (
    <>
    <SubHeader title="Membership Plan" image={header_bg_4} >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, facilis?
    </SubHeader>
    <section className=' container m-auto'>
      <div className=' mt-9 p-3 w-full flex flex-row flex-wrap items-center justify-center gap-6' >
       {
          plans.map((plan, index) => {
            return (
              <Card key={index} className=' w-[90%] md:max-w-[30%] md:min-h-[45rem] md:max-h-[51rem]  bg-blue-400 flex justify-center items-start flex-col shadow-md border-2 border-blue-50 rounded-ss-3xl rounded-ee-3xl duration-300 hover:bg-blue-300 hover:rotate-2 ' >
                <div className=' p-3 w-full flex flex-col items-start justify-center'>
                  <h3 className='text-2xl font-bold text-gray-800'>{plan.name}</h3>
                  <p className='text-gray-600 mt-3'>{plan.desc}</p>
                  <div className=' p-3 flex items-start justify-center flex-col gap-1'>
                    {
                      plan.features.map((feature, index) => {
                        return (
                          <div key={index} className='flex items-center justify-start gap-1'>
                            <span className='text-gray-800'>{feature.available ? '✅' : '❌'}</span>
                            <span className='text-gray-800 hover:text-white cursor-pointer'>{feature.feature}</span>
                          </div>
                        )
                      })
                    }
                 </div>
                  <div className='mt-5'>
                    <h4 className='text-2xl font-bold text-gray-800'>{plan.price}</h4>
                  </div>
                  <Button className='mt-5' title="Buy Now" to="/plans" ></Button>
                </div>
              </Card>
            )
          })


       }
      </div>

    </section>
    
    </>
  )
}

export default Plans