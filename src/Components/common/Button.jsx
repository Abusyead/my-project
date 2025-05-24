import { Children } from "react"
import { twMerge } from "tailwind-merge"
import { cn } from "../../lib/utils"
export function Button({children , className}) {
  return (

    <button className={cn("py-3 sm:py-4 px-3.5 sm:px-[25px] font-bold rounded-full text-white bg-grad-primary opacity-90 hover:opacity-100 transition-all delay-150 md:text-base text-xs",className)}>{children}</button>
 
  )
}

  