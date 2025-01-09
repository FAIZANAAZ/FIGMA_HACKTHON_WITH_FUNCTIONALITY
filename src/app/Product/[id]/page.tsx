'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"



const sizes = ['Small', 'Medium', 'Large', 'X-Large']
const colors = ['#4f4631', '#314f4a', '#6e2c7d'] // Brown, Black, Gray


// `/Product/details?imageUrl=${imageUrl}&h1=${h1}&stars=${stars}&ranking=${ranking}&price=${price}&id=${id}
export default  function ProductDetail({ searchParams }: { searchParams: Promise<{ imageUrl: string; h1: string; ranking: number; price: number }> }) {

  
  
  const [data, setdata] = useState<{ imageUrl: string; h1: string; ranking: number; price: number }>({ imageUrl: '', h1: '', ranking: 0, price: 0 })

   useEffect(() => {
  
  const fetchData = async () => {
    const dataparams =  searchParams;
    const { imageUrl, h1, ranking, price }= await dataparams
    setdata({ imageUrl, h1, ranking, price });
  }
  fetchData()
}, [searchParams])


  // const cardData = searchParams.find((item) => item.id == cardid);
  const [selectedSize, setSelectedSize] = useState('Medium')
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const handleAddToCart = () => {
    const newItem = {
     
      name: data?.h1,
      size: selectedSize,
      color: selectedColor,
      price: data?.price,
      picture: data?.imageUrl,
      quantity: 1
    };

    // Get existing cart items or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if the item already exists in the cart
    const existingItemIndex = existingCart.findIndex((item:{ name: string; size: string; color: string; picture: string; quantity: number;}) => 
      item.picture === newItem.picture && item.size === newItem.size && item.color === newItem.color
    );

    if (existingItemIndex !== -1) {
      // If item exists, increase its quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // If item doesn't exist, add it to the cart
      existingCart.push(newItem);
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    alert('Product added to cart successfully!');}

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="md:flex hidden  items-center gap-4 mb-8 text-base">
        <Link href="/" className="text-muted-foreground hover:text-black">Home</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <Link href="#!" className="text-muted-foreground hover:text-black">Shop</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <Link href="#!" className="text-muted-foreground hover:text-black">Men</Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <span className="text-black">T-shirts</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Image Gallery */}
        {data && (
        <><div key={data.imageUrl} className="flex gap-6 flex-col md:flex-row ">
            <div className=" abcs flex flex-col items-center gap-4 ">

              <div className="w-20 h-20 border rounded-lg overflow-hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product thumbnail"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover" />
              </div>

              <div className="w-20 h-20 border rounded-lg overflow-hidden">
                <Image
                  src={data.imageUrl}
                  alt="Product thumbnail"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover" />
              </div>

              <div className="w-20 h-20 border rounded-lg overflow-hidden">
                <Image
                 src={data.imageUrl}
                  alt="Product thumbnail"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover" />
              </div>

            </div>
            <div className="flex-1 aspect-square rounded-lg overflow-hidden">
              <Image
                 src={data.imageUrl}
                alt="Product main image"
                width={600}
                height={600}
                className="w-full h-full object-cover" />
            </div>
          </div><div className="space-y-8">
              <div className="space-y-4">
                <h1 className="md:text-3xl font-bold">{data.h1}</h1>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC633] text-[#FFC633]" />
                  ))}
                  <Star className="w-5 h-5 fill-[#FFC633] text-[#FFC633] " />
                  <span className="text-sm text-muted-foreground">(4.5)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">{data.price}</span>
                  <span className="text-xl text-muted-foreground line-through">$300</span>
                </div>
                <p className='text-gray-600 text-start'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
              </div>

 <div className="space-y-4  md:flex-row items-center ">
                <span className="text-sm font-medium">Select Color</span>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`}
                      style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-medium">Choose Size</span>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[100px] ${selectedSize === size ? 'bg-black rounded-[40px] text-white' : ''}`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div> 


              <div className="flex  justify-center items-center  md:flex-row  gap-6">
    
                <Link href={"/Addcard"}> <Button onClick={handleAddToCart} className="h-12 px-12 rounded-[40px] w-full   text-white hover:bg-black/90">
                  Add to Cart
                </Button></Link> 
              </div>
            </div></>)}
      </div>
    </div>
  )
}



