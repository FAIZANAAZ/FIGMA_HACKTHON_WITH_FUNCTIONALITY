import Link from "next/link";
import Card from "./cards";
import { client } from "@/sanity/lib/client";



interface Arrival {
  arrivalimage: string;
  arrivalheading: string;
  arrivalranking: number;
  arrivalprice: number;
  ranking:string;
}
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

  

  const arrivals = res.arrival;

  return (
    <>
      <div
        id="newarrivals"
        className="bg-white flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="pt-5 font-integral text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
          New Arrivals
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-x-52 justify-items-center mt-8 sm:mt-10 md:mt-12">
          {arrivals.map((arrival:Arrival , index: number) => (
            <Card
              key={index}
              imageUrl={arrival.arrivalimage}
              h1={arrival.arrivalheading}
              ranking={arrival.arrivalranking.toString()}
              price={arrival.arrivalprice}
              className="w-full max-w-[295px] aspect-square rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]"
              id={index + 1}
            />
          ))}
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <Link href="/Filter">
            <button className="w-full max-w-[358px] h-12 sm:h-[52px] rounded-[62px] py-2 px-4 sm:px-[54px] hover:bg-gray-200 flex items-center justify-center text-sm sm:text-base transition duration-300 ease-in-out">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

