import Link from "next/link";
import Card from "./cards";
import { client } from "@/sanity/lib/client";

export default async function Arrivals() {
  const res = await client.fetch(
    `*[_type == 'landingpage'][0].sections[0]{
      'arrival': arrival[] {
        'arrivalheading': arrivalheading,
        'arrivalimage': arrivalimage.asset->url,
        'arrivalranking': arrivalranking,
        'arrivalprice': arrivalprice
      }
    }`
  );

  console.log(res,"😪");
  

  const arrivals = res.arrival; // Here, we get the array of arrivals

  return (
    <>
      <div
        id={"newarrivals"}
        className="bg-white flex items-center flex-col justify-center object-cover"
      >
        <h1 className="pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px]">
          New Arrivals
        </h1>
        <div className="w-full h-fit flex md:flex-row flex-col items-center justify-center md:mx-[100px] gap-4 md:gap-8 md:mt-10">
          {arrivals.map((arrival:any, index:any) => (
            <Card
              key={index}
              imageUrl={arrival.arrivalimage}
              h1={arrival.arrivalheading}
              stars={`/s${index + 1}.png`} 
              ranking={arrival.arrivalranking}
              price={arrival.arrivalprice}
              className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]"
              id={index + 1}
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
