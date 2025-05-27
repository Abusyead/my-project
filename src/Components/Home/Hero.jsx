import { Button } from "../common/Button"
import Contaner from "../common/Contaner"
 

export const Hero =() =>{
  return(
    <section   className="sm:pt-10 md:pt-20 lg:pt-28 xl:pt-[142px] relative">
    <img className="top-0 absolute left-0" src="img/bg-hero-style.png" alt="" />
      <Contaner className="flex justify-between  flex-col-reverse  md:flex-row  items-center gap-15 md:gap-5">
        <div className="space-y-5 md:space-y-[29px]">
          <h1 className="font-space font-bold text-2xl md:text-4xl lg:text-6xl Md:leading-[60px] lg:leading-[76px]  max-w-[450px] xl:max-w-[593px]">Simplify your real estate document analysis</h1>
          <p className="text-base md:text-lg lg:text-xl max-w-[519px] font-semibold">Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
          <Button>Get Started Today</Button>

        </div>
        <div>
          <img src="img/hero-right-img.png" alt="hero img" className="w-[80%] md:w-[500px] xl:w-[750px] mx-auto"/>
        </div>
      </Contaner>
      
    </section>
  )
}