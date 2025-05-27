import React from 'react'
import Contaner from '../common/Contaner'
import TextGradient from '../common/TextGradient'
import Title from '../common/Title'

function ProblemSolutionHeader() {
  return (
    <section>
        <Contaner>
            <div className='flex justify-center md:justify-between  item-center flex-col md:flex-row text-center md:text-start'>
               <Title>Problem & <TextGradient>Solution</TextGradient></Title>
               <div className='flex gap-5 justify-center items-center mt-4 md:mt-0'>
                  <button><img  className="bg-white size-10 flex justify-center items-center rounded-full arrowBtn p-3" src="/feArrowUp1.svg"alt="" /></button> 
                  <button><img  className="bg-grad-primary size-10 flex justify-center items-center rounded-full arrowBtn p-3" src="/feArrowUp2.svg"alt="" /></button> 
               </div>
            </div>

            <div>

            </div>
        </Contaner>
    </section>
  )
}

export default ProblemSolutionHeader