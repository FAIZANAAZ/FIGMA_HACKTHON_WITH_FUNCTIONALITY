"use client"

import * as React from "react"
import Image from "next/image"
import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CartItem {
  id: number
  name: string
  size: string
  color: string
  price: number
  image: string
  quantity: number
}

export default function ShoppingCart() {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/l3.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/p3.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/p2.png",
      quantity: 1,
    },
  ])
// ye sb functionality chal rhi he quenty ke oper


  // reduce ye kryga ke sbsy phly oski value  acc 0 hogi kioky hmnny 0 diya he wo jiny itremske price hongy osko +kryga
  // phir multiplay kryga quentity sy ke kitny orders hen
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // yha hm multiplay kry hen yani jb jb quanty brhy gi or subtotal me save hogi to wo os hisab sy multiplay ho jay
  // yani 2 shirt hoi to discout zada hoga 1 hoi to km 
  const discount = subtotal * 0.2

  //ismy hm delivery rakh rhy hn 
  const deliveryFee = 15

  // ye + - ke bad hm total kry hen
  const total = subtotal - discount + deliveryFee

// ismy hm ye kry ke kb kb quenty brhy
  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        // 1 ka matlb ak ha 1 hona lazmi he phly sy or by default hmny nichy argument me kha he ke delta 1 hoga yani 1 hi ayga wo har br
        //or items me click hony pr wo id aygi jo map me chali hogi wo dono ko cheq kryga or jisy ye dono match hongi oski brha dega quatity yani map wha sy phly id layga or yha bhi map ye or map to har item pr jata he
        // wo har item ki id match kry

        : item
    ))
  }
// ismy hm delete kry hn quenty ko
  const removeItem = (id: number) => {
    // filter ye kra he ke hmny kha he ke agr item.id !== id id jo ai he wo or item.id agr == nhi he hen rakhlo or braber he to htado filter krdo osko 
    setItems(items.filter(item => item.id !== id))
  }


  return (
    <div className="mx-auto max-w-[1340px] px-[16px] md:px-[100px] py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white border border-black/10 rounded-[20px] p-[20px_24px]">
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div className="flex gap-4">
                  <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-[8.66px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm">Size: {item.size}</p>
                        <p className="text-sm">Color: {item.color}</p>
                      </div>
                      <p className="font-bold text-2xl">${item.price}</p>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash className="h-6 w-6" />
                      </Button>
                      <div className="flex items-center gap-5 px-5 py-3 bg-[#F0F0F0] rounded-[62px]">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, -1)}
                          // -1 kaa matlb ak hi km ho zada nhi
                          className="h-5 w-5 p-0"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="font-medium text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="h-5 w-5 p-0"
                        >
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-black/10" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[505px] bg-white border border-black/10 rounded-[20px] p-[20px_24px] space-y-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Subtotal</span>
              <span className="text-xl font-bold">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Discount (-20%)</span>
              <span className="text-xl font-bold text-red-500">-${discount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Delivery Fee</span>
              <span className="text-xl font-bold">${deliveryFee}</span>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${total}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#F0F0F0] rounded-[62px]">
              <Input
                type="text"
                placeholder="Add promo code"
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-black/40"
              />
            </div>
            <Button className="px-4 py-3 h-auto rounded-[62px] bg-black hover:bg-black/90">
              Apply
            </Button>
          </div>
          <Button className="w-full h-[60px] rounded-[62px] bg-black hover:bg-black/90 text-base">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

