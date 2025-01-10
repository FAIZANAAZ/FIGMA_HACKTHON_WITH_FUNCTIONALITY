"use client"

import { client } from "@/sanity/lib/client";
import Card from "../cards";
import { useEffect, useState } from "react";

interface detailcards {
  productImage: string;
  productHeading: string;
  productRating: number;
  productPrice: number;
}
export default  function Detailcards() {
  const [response, setresponse] = useState<detailcards[]>([])

  useEffect( () => {
   const responsefunc = async () => {
    const res =await client.fetch(`*[_type == 'ProductDetail'][0].productDetailSections[]{
      'productImage': productImage.asset->url,
      'productHeading': productHeading,
      'productPrice': productPrice,
      'productRating': productRating
    }`)
    setresponse(res)

   }
    responsefunc()
  }, [])
  


  return (
    <>
    <div className="bg-white flex items-center flex-col justify-center object-cover md:mb-[180px]">
        
      <h1 className=" md:pt-5 font-integral md:text-[48px] font-bold leading-[57.6px]">
      You might also like
      </h1>
      <div className=" w-full h-fit flex flex-col md:flex-row items-center justify-center md:mx-[100px] gap-4 md:gap-8 md:mt-10">
        {/* card1 */}
        {response.map((item:detailcards , index: number) => {
          
       
           return(
            <Card
            key={index}
            imageUrl={item.productImage}
            h1={item.productHeading}
            ranking={item.productRating.toString()}
            price={item.productPrice}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] " id={index+9}/>
           )
          
})}
     
      </div>
     

      </div>
   
    </>
  );
}
