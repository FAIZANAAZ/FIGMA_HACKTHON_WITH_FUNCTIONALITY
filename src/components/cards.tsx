"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps{
    imageUrl:string;
    h1:string;
    ranking:string;
    price:number;
    className:string
    id:number|string
}
 const Card:React.FC<CardProps> =({imageUrl,h1,price,className,id,ranking})=>{

return(
<Link href={`/Product/id?imageUrl=${imageUrl}&h1=${h1}&ranking=${ranking}&price=${price}`}>  
<motion.div
          initial={{opacity :0 ,y:100}}
         
           whileInView={{opacity:1,y:0}}
      
     
           transition={{duration:1 ,ease:"easeInOut" }}
   
        >
  <div key={id} className={`w-[296px] h-[444px] ml-[-1px] flex flex-col gap-5 ${className} bg-white`}>
        <div className="flex flex-col gap-3 hover:transition-transform items-center md:text-start hover:scale-105">
            <Image
             src={imageUrl} 
             alt="product image"
              width={295} 
              height={298} 
              className=" w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] " />

              
            <h1 className=" capitalize font-satoshi text-[18px] w-[90%] text-center font-bold leading-[27px] truncate text-black ">{h1.toLowerCase()}</h1>
            <div className="flex items-center justify-center gap-3">
            <Image src="/starsrating.jpg" alt="stars" width={150} height={19} className="w-[150px] h-[19px] flex items-center justify-start gap-[13px] " /> 
                        {ranking}</div>
            
            
            <h2 className="text-2xl leading-[32.4px] text-black"> ${price}</h2>

        </div>
    </div>
    </motion.div>
    </Link>
)
 }

 
 export default Card;