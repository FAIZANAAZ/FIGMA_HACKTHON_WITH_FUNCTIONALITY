import Link from "next/link";
import Card from "./cards";
import { client } from "@/sanity/lib/client";

export default async function Selling() {
  const res = await client.fetch(
    `*[_type == 'landingpage'][2].sections[0]{'topselling': topselling[] {'topsellingheading': topsellingheading,'topsellingimage': topsellingimage.asset->url,'topsellingranking': topsellingranking,'topsellingprice': topsellingprice}
    }`
  );

  
  

  const topselling = res.topselling; 

  return (
    <>
      <div
        id={"topselling"}
        className="flex flex-col items-center justify-center md:mt-[100px] object-cover mb-5"
      >
        <h1 className="pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px]">
          Top Selling
        </h1>
        <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center md:mx-[100px] gap-4 md:gap-8 mt-10">
          {topselling.map((item: any, index: any) => (
            <Card
              key={index}
              imageUrl={item.topsellingimage}
              h1={item.topsellingheading}
              stars={`/s${index + 5}.png`} // Update this according to your data or logic for star images
              ranking={item.topsellingranking}
              price={item.topsellingprice}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
              id={index + 5}
            />
          ))}
        </div>
        <div className="md:mt-[150px]">
          <Link href={"/Filter"}>
            <button className="w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] hover:bg-gray-200 flex items-center justify-center">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
