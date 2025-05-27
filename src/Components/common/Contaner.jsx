import React from 'react'
import { cn } from '../../lib/utils'

function Contaner({children , className}) {
  return (
    <div className={cn("w-full  mx-auto px-2.5 max-w-[1284px] "
    ,className)}> {children} </div>
  )
}

export default Contaner