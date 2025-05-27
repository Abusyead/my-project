import { cn } from '../../lib/utils'
import TextGradient from './TextGradient' 

export const Title = ({children , className , gradient}) => {
  return (
    <h1 className={cn("font-space text-2xl font-bold text-[35px] lg:text-[46px] md:leading-[45px] lg:leanding-[58.7px]" , className )}>{children} <TextGradient>{gradient}</TextGradient> </h1>
  )
}

export default Title