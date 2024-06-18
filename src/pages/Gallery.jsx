import React from 'react'
import { SubHeader } from '../component'
import header_bg_3 from '../assets/images/header_bg_3.jpg'
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15 } from '../assets/images'



const Gallery = () => {


  return (
    <section>
      <SubHeader title="Gallery" image={header_bg_3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci repellat laborum dolor maxime explicabo nihil perferendis, hic iste optio!
      </SubHeader>
      <section className=' container m-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-9">
          <img className=' hover:opacity-30 duration-300' src={gallery1} alt="gallery1" />
          <img className=' hover:opacity-30 duration-300' src={gallery2} alt="gallery2" />
          <img className=' hover:opacity-30 duration-300' src={gallery3} alt="gallery3" />
          <img className=' hover:opacity-30 duration-300' src={gallery4} alt="gallery4" />
          <img className=' hover:opacity-30 duration-300' src={gallery5} alt="gallery5" />
          <img className=' hover:opacity-30 duration-300' src={gallery6} alt="gallery6" />
          <img className=' hover:opacity-30 duration-300' src={gallery7} alt="gallery7" />
          <img className=' hover:opacity-30 duration-300' src={gallery8} alt="gallery8" />
          <img className=' hover:opacity-30 duration-300' src={gallery9} alt="gallery9" />
          <img className=' hover:opacity-30 duration-300' src={gallery10} alt="gallery10" />
          <img className=' hover:opacity-30 duration-300' src={gallery11} alt="gallery11" />
          <img className=' hover:opacity-30 duration-300' src={gallery12} alt="gallery12" />
          <img className=' hover:opacity-30 duration-300' src={gallery13} alt="gallery13" />
          <img className=' hover:opacity-30 duration-300' src={gallery14} alt="gallery14" />
          <img className=' hover:opacity-30 duration-300' src={gallery15} alt="gallery15" />
        </div>
        
      </section>
    </section>
  )
}

export default Gallery