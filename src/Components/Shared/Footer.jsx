import Contaner from "../common/Contaner"
import { navItems , Socialicon } from "../../lib/db"


export const Footer = () =>{
    return(
        <footer className="mt-[2000px]">
            <Contaner>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2.5">
                    <h1 className="font-space text-xl sm:text-2xl lg:text-lg xl:text-4xl font bold">
                       AI GoverningDocs
                    </h1>
                    <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
                        {navItems.map(({label , link} , i)=>(
                            <a href={link}>
                            <p key={i} className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer">{label}</p></a>          
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-2.5 py-[20px]">
                        {Socialicon.map(({img , url } , i) =>(
                            <a key={i} href={url}>
                                <img src={img} target="_blank" alt="Social icon" className="size-[36px]"/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-border border-t border-transparent mt-5 md:mt-[50px] lg:mt-[106px] ">
                   <p className="text-lg text-center leading-[18px] text-[#111111] py-5">
                     Ai GoverningDocs 2024. All Rights Reserved.
                </p>
                </div>
               
            </Contaner>
        </footer>
    )
}

 