import React from 'react'
import Contaner from '../common/Contaner'
import Title from '../common/Title'
import TextGradient from '../common/TextGradient'
import { parData } from '../../lib/db'

function Partners() {
  return (
    <section className='px-2.5'> 
        <Contaner className="bg-[#E6F9FD] py-[50px] max-w-[1276px] rounded-[20px]">
         {/* partners header */}
              <div className='text-center'>
                  <Title>Our <TextGradient>Partners</TextGradient> </Title>
              </div>
              <div className='mt-[40px] flex justify-center items-center flex-wrap gap-[28px]'>
                  {parData.map((data, i) =>(
                    <div className="w-[274px] bg-white border-[#D6D6D6] border px-3 rounded-xl h-[101px] flex justify-center items-center">
                        <img src={data.img} key={i} alt="" />
                    </div>
                    
                  ))}
              </div>
        </Contaner>
    </section>
  )
}

export default Partners