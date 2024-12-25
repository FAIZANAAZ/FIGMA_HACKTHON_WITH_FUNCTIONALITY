

import Link from "next/link";
import Image from "next/image";
interface CardProps{
    imageUrl:string;
    h1:string;
    stars:string;
    ranking:string;
    price:number;
    className:string

    id:number
}
 const Card:React.FC<CardProps> =({imageUrl,h1,stars,price,className,id,ranking})=>{
return(
<Link href={`/Product/${id}`}>  
  <div key={id} className={`w-[296px] h-[444px] ml-[-1px] flex flex-col gap-5 ${className} bg-white`}>
        <div className="flex flex-col gap-3 hover:transition-transform items-center md:text-start hover:scale-105">
            <Image
             src={imageUrl} 
             alt="product image"
              width={295} 
              height={298} 
              className=" w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] " />

              
            <h1 className=" capitalize font-satoshi text-[18px] text-center font-bold leading-[27px] truncate text-black ">{h1.toLowerCase()}</h1>
            <div className="flex items-center justify-center gap-3">
            <Image src={stars} alt="stars" width={150} height={19} className="w-[150px] h-[19px] flex items-center justify-start gap-[13px] " /> 
                        {ranking}</div>
            
            
            <h2 className="text-2xl leading-[32.4px] text-black"> ${price}</h2>

        </div>
    </div></Link>
)
 }

 
 export default Card;