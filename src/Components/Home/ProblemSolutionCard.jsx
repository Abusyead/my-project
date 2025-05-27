import React from 'react'
import Contaner from '../common/Contaner' 

function ProblemSolutionCard({img, title, dis1 , dis2}) {
  return (
    <section>
        <Contaner> 
        
        {/* ProblemSolutionCard */}

            <div className=''>
                <div className='w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 problemCard hover:bg-primary transition-color duration-200 group' >
                    <div className='bg-grad-primary size-[58px] rounded-full flex justify-center items-center '>
                        <img src={img} alt="titile" />
                    </div>
                    <h1 className='font-bold text-lg text-secondary leading-none group-hover:text-white'>{title}</h1>
                    <div className='text-accent space-y-2.5 group-hover:text-white'>
                        <p>{dis1}</p>
                        {dis2 && <p>{dis2}</p>}
                    </div>
                </div>
            </div>
        </Contaner>
    </section>
  )
}

export default ProblemSolutionCard