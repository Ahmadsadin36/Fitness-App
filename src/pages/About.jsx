import React from 'react'
import { AboutSections, SubHeader } from '../component'
import header_bg_1 from '../assets/images/header_bg_1.jpg'
import about1 from '../assets/images/about1.jpg'


const About = () => {
  return (
    <main>
      <SubHeader title="About" image={header_bg_1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque pariatur nihil suscipit inventore aperiam aut quidem, iste ducimus magni.
      </SubHeader>
      <section className=' container m-auto'>
        <AboutSections image={about1} title= " lorem" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.'
         className=" flex-col md:flex-row"  className2="skew-x-12 hover:skew-x-0 duration-300 " />
        <AboutSections image={about1} title= " lorem" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsum officiis? Placeat minima earum, quisquam sequi tempora quia quidem est!' className=" flex-col md:flex-row-reverse"  className2="-skew-x-12 hover:skew-x-0 duration-300 " />
        <AboutSections image={about1} title= " lorem" text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni!        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum ex distinctio ipsa odio assumenda architecto fugit delectus, est sed.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsum officiis? Placeat minima earum, quisquam sequi tempora quia quidem est!' className=" flex-col md:flex-row"  className2="skew-x-12 hover:skew-x-0 duration-300 " />

        
      </section>

    </main>
  )
}

export default About