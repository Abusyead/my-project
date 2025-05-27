import React from 'react'
import Contaner from '../common/Contaner' 
import ProblemSolutionHeader from './ProblemSolutionHeader'
import ProblemSolutionCard from './ProblemSolutionCard'
import { CardData } from '../../lib/db'

function ProblemSolution() {
  return (
    <section className='pt-10 md:pt-20 lg:pt-28 xl:pt-32'>
        <Contaner>
            <ProblemSolutionHeader /> 
            <div className='pt-10 grid grid-cols-4 place-items-center gap-[30px]'>
                {CardData.map((problem , i)=>(
                  <ProblemSolutionCard {...problem}
                    // img={problem.img} 
                    // title={problem.title} 
                    // dis1={problem.dis1} 
                    // dis2={problem.dis2}
                    // key={i}

                    />
                ))}
            </div>
        </Contaner>
    </section>
  )
}

export default ProblemSolution