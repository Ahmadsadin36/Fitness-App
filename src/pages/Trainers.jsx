import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SubHeader from '../component/SubHeader';
import header_bg_5 from '../assets/images/header_bg_5.jpg';
import {trainers} from '../constant/data';
import Card from '../component/Card';

// const trainers = [
//   {
//       id: 1,
//       image: Trainer1,
//       name: 'John Doe',
//       job: 'Aerobic Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   },
//   {
//       id: 2,
//       image: Trainer2,
//       name: 'Daniel vinyo',
//       job: 'Speed Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   },
//   {
//       id: 3,
//       image: Trainer3,
//       name: 'Edem Quist',
//       job: 'Flexibility Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   },
//   {
//       id: 4,
//       image: Trainer4,
//       name: 'Shatta Wale',
//       job: 'Body Composition Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   },
//   {
//       id: 5,
//       image: Trainer5,
//       name: 'Diana Ayi',
//       job: 'Circuit Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   },
//   {
//       id: 6,
//       image: Trainer6,
//       name: 'Wayne Carter',
//       job: 'Physical Intelligence Trainer',
//       socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
//   }
// ]

const Trainers = () => {
  return (
    <>
    <SubHeader title="Our Trainers" image={header_bg_5} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium!
    </SubHeader>
    <section className=' container m-auto'>
      <div className=' mt-9 flex items-center justify-center flex-row flex-wrap w-full gap-6'> 
        {
          trainers.map((trainer) => {
            return <Card key={trainer.id} className=" bg-blue-400 rounded-3xl shadow-sm border border-blue-50 max-h-[24rem] max-w-[16rem]">
              <img src={trainer.image} alt={trainer.name} className='w-full h-52 object-cover rounded-3xl' />
              <div className='p-4'>
                <h2 className='text-xl font-bold'>{trainer.name}</h2>
                <p className='text-gray-600'>{trainer.job}</p>
                <div className='flex items-center justify-center gap-4 mt-4'>
                  <a className=' hover:-translate-y-2 duration-300' href={trainer.socials[0]}><FaInstagram className='text-2xl text-red-500' /></a>
                  <a className=' hover:-translate-y-2 duration-300' href={trainer.socials[1]}><FaTwitter className='text-2xl text-blue-500' /></a>
                  <a className=' hover:-translate-y-2 duration-300' href={trainer.socials[2]}><FaFacebook className='text-2xl text-blue-700' /></a>
                  <a className=' hover:-translate-y-2 duration-300' href={trainer.socials[3]}><FaLinkedin className='text-2xl text-blue-800' /></a>
                </div>
              </div>
            </Card>
          })
        }


      </div>

    </section>
    
    
    </>
  )
}

export default Trainers