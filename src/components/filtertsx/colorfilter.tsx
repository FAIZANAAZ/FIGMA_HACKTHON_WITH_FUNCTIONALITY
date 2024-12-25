

import Link from "next/link";
import Card from "../cards";
import { client } from "@/sanity/lib/client";

export default async function ProductFilterColor() {
  const res = await client.fetch(
    `*[_type == 'casualPage'][0].casualData[] {
      'casualHeading': casualHeading,
      'casualRating': casualRating,
      'casualImage': casualImage.asset->url,
      'casualPrice': casualPrice
    }`
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8  ">
      <div className="bg-white flex items-center flex-col justify-center object-cover ">
        <div className="mb-8 flex items-center justify-between w-full">
          <h1 className="text-[32px] leading-[43.2px] font-bold">Casual</h1>
          <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] md:gap-x-[20px] md:gap-y-[150px] md:mt-10">
          {res.map((item:any, index:any) => {
            // Condition to dynamically set the ID based on the index
            let dynamicId;
            if (index === 0) dynamicId = 11; // Example: if index 0, id should be 2
            else if (index === 1) dynamicId = 10; // Example: if index 1, id should be 11
            else if (index === 2) dynamicId = 9; // Example: if index 1, id should be 11

            else dynamicId = index-1 ; // Default case

            return (
              <Card
                key={index}
                imageUrl={item.casualImage}
                h1={item.casualHeading}
                stars="/s2.png"
                ranking={item.casualRating}
                price={item.casualPrice}
                id={dynamicId} // Dynamically set ID
                className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
              />
            );
          })}
        </div>

        <div className="mt-[150px]">
          <Link href={"/Filter"}>
            <button className="w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] hover:bg-gray-200 flex items-center justify-center">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
