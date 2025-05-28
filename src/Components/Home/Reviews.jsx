import React, { useState } from 'react'
import Title from '../common/Title'
import TextGradient from '../common/TextGradient'
import Contaner from '../common/Contaner'
import { ReviewCard } from './ReviewCard'
import { reviewData } from '../../lib/db'
import { cn } from '../../lib/utils'
export default function Reviews() {
    const [active , setactive] = useState(1) 
    const activeReview = reviewData[active]
    

    
  return (
    <section className='my-[50px] md:my-20 lg:my-[100px] xl:my-[150px] bg-[#f6f6f6] py-10 lg:py-20'>
        <Contaner>
            <Title className="text-center">Reviews From <TextGradient>Our Client</TextGradient> </Title>
            <div className='pt-10 flex flex-col md:flex-row justify-center   items-center gap-10 md:gap-20  xl:gap-[93px]'>
                <div  className="flex  md:justify-start justify-center items-center gap-5 lg:w-[516px] md:min-w-[400px] w-full ">
                    {/* review line */}
                    
                    <div className='bg-[#E2DED8] w-[5px] gap-[93px] rounded-[50px] px-2'>
                        <div className='space-y-[15px] rounded-[50px]'>
                        {Array.from(Array(3).keys()).map((el) => (
                            <div key={el} className={cn('w-[5px] h-[92px] rounded-[20px] bg-transparent' , active == el && "bg-grad-primary")}></div>
                        ))}
            
                        </div>  
                    </div>

                                 {/* review card */}
        
                    <div className="space-y-[15px] flex-1">
                    {reviewData.map((card , i) =>(
                        <ReviewCard  key={i} onClick={() => setactive(i)}  active={(active == i)} {...card}/> 
                    ))}
                        
                    </div>
                </div>

              {/* review section */}

                <div className="space-y-[30px] max-w-[570px] px-6 md:text-start text-center md:pt-0 pt-4">
                    <h1 className='font-bold text-[30px]'>{activeReview.review.title}</h1>
                    <div className='flex justify-center md:justify-start  items-center gap-[5px] '>
 
        
                    {Array.from(Array(activeReview.review.stars).keys()).map((el) =>(
                        <img key={el} src="star.svg" alt="" />
                    ))}
                         
                    </div>
                    <p className='text-base text-accent max-w-[550px]'>{activeReview.review.details}</p>
                    
                </div>
            </div>
        </Contaner>
        
    </section>
  )
}
