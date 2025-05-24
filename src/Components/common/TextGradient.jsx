import React from 'react'
import { cn } from '../../lib/utils'

function TextGradient({children,className}) {
  return (
    <span className={cn("bg-gradient-to-b from-[#00D2FF] to-[#059DBF] bg-clip-text text-transparent",className)}>{children}</span>
  )
}

export default TextGradient