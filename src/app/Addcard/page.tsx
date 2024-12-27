"use client"

import * as React from "react"
import Image from "next/image"
import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type CartItem = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  picture: string;
  quantity: number;
};

export default function ShoppingCart() {
  const [items, setItems] = React.useState<CartItem[]>([])

  React.useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      setItems(JSON.parse(cartItems))
    }
  }, [])

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const discount = subtotal * 0.2
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  const updateQuantity = (id: number, size: string, color: string, delta: number) => {
    const updatedItems = items.map(item => 
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    )
    setItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
  }

  const removeItem = (id: number, size: string, color: string) => {
    const updatedItems = items.filter(item => 
      !(item.id === id && item.size === size && item.color === color)
    )
    setItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
  }

  return (
    <div className="mx-auto max-w-[1340px] px-[16px] sm:px-[50px] md:px-[100px] py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white border border-black/10 rounded-[20px] p-[20px_24px]">
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <React.Fragment key={`${item.id}-${item.size}-${item.color}`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-[124px] h-[124px] bg-[#F0EEED] rounded-[8.66px] relative overflow-hidden">
                    <Image
                      src={item.picture}
                      alt={item.name}
                      fill
                      className="md:object-cover object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col justify-between mb-4 sm:mb-0">
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-sm">Size: {item.size}</p>
                        <p className="text-sm">Color: {item.color}</p>
                      </div>
                      <p className="font-bold text-2xl">${item.price}</p>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-between items-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash className="h-6 w-6" />
                      </Button>
                      <div className="flex items-center gap-5 px-5 py-3 bg-[#F0F0F0] rounded-[62px]">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                          className="h-5 w-5 p-0"
                        >
                          <Minus className="h-5 w-5" />
                        </Button>
                        <span className="font-medium text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
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
              <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Discount (-20%)</span>
              <span className="text-xl font-bold text-red-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl text-black/60">Delivery Fee</span>
              <span className="text-xl font-bold">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-xl">Total</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
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

