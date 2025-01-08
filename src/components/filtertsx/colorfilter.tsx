"use client";

import Link from "next/link";
import Card from "../cards";
import { client } from "@/sanity/lib/client";
import { fetchAndUploadProducts } from "@/services/api";
import { useEffect, useState } from "react";

export default function ProductFilterColor() {
  const [Cardapi, setCard] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(`*[_type == "product" ][]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "image": image.asset->url
      }
    `);
      setCard(products);
      if (!products || products.length === 0) {
        await fetchAndUploadProducts();

        const products = await client.fetch(`*[_type == "product" ][]{
          name,
          description,
          price,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          tags,
          sizes,
          "image": image.asset->url
        }
      `);
        setCard(products);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto w-full py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
      <div className="bg-white flex items-center flex-col justify-center">
        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] leading-tight sm:leading-[43.2px] font-bold mb-2 sm:mb-0">Casual</h1>
          <select className="w-full sm:w-auto mt-2 sm:mt-0 rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-[70px] md:gap-y-[150px] mt-4 sm:mt-6 md:mt-10">
          {Cardapi.map((item:any, index:any) => {
            return (
              <Card
                key={index}
                imageUrl={item.image}
                h1={item.name}
                ranking={item.rating}
                price={item.price}
                id={item._id}
                className="w-full max-w-[295px] h-auto aspect-square rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] mx-auto"
              />
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-[150px] w-full flex justify-center">
          <Link href={"/Filter"}>
            <button className="w-full sm:w-auto max-w-[358px] h-[46px] md:h-[52px] rounded-[62px] py-2 sm:py-4 px-4 sm:px-[54px] hover:bg-gray-200 flex items-center justify-center text-sm sm:text-base">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

