"use client"

import React from 'react'
import { useParams } from 'next/navigation'; // Hook to get params from the URL
import ProductDetail from '@/components/revews/details';
import Detailcards from '@/components/revews/detsilcards';
import ReviewsSection from '@/components/revews/reviews';

const Daynapicproductsd = () => {
  // Fetch dynamic params using useParams
  const { id } = useParams();
  
  // Convert the string id to a number
  const productId = Number(id);

  return (
    <div className='md:px-[100px]'>
      <ProductDetail cardid={productId} />
      <ReviewsSection/>
     <Detailcards/>
    </div>
  );
}

export default Daynapicproductsd;
 