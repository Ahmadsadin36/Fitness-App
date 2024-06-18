import React from 'react'
import {FAQ, Footer, Header, Programs, Testimonials, Values} from '../component'

const Home = () => {
  return (
    <main className=' container m-auto'>
      <Header />
      <Programs />
      <Values />
      <FAQ />
      <Testimonials />
    </main>
  )
}

export default Home