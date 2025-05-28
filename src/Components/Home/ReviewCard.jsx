import React from 'react'
import { cn } from '../../lib/utils'

export function ReviewCard({img , name ,type , active , onClick}) {
  return (
    <section>
        <div onClick={onClick} className={cn("flex justify-start items-center bg-[#FFFFFF] border border-primary rounded-[20px] gap-[13px] md:max-w-[491px] max-full py-1 px-5 ", active && "bg-grad-primary")}> 
            <img src={img} alt="" />
            <div className={cn("font-semibold text-base text-accent", active && "text-white")}>
                <h4>{name}</h4>
                <p>{type}</p>
            </div>
        </div>
    </section>
  )
}
