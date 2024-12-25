"use client"
import Image from 'next/image';

import * as React from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const categories = [
  "T-shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans"
]

const colors = [
  { name: "Green", class: "bg-[#00C12B]" },
  { name: "Red", class: "bg-[#F50606]" },
  { name: "Yellow", class: "bg-[#F5DD06]" },
  { name: "Orange", class: "bg-[#F57906]" },
  { name: "Light Blue", class: "bg-[#06CAF5]" },
  { name: "Blue", class: "bg-[#063AF5]" },
  { name: "Purple", class: "bg-[#7D06F5]" },
  { name: "Pink", class: "bg-[#F506A4]" },
  { name: "White", class: "bg-white" },
  { name: "Black", class: "bg-black" },
]

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
]

const dressStyles = [
  "Casual",
  "Formal",
  "Party",
  "Gym",
]

export function FiltersSidebar() {
  const [priceRange, setPriceRange] = React.useState([50, 200])
  const [openSections, setOpenSections] = React.useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  })

  return (
    <div className="box-border flex flex-col items-start w-[295px] min-h-[1220px] p-[20px_24px] gap-6 border border-black/10 rounded-[20px] bg-white font-['Satoshi']">
      {/* Header */}
      <div className="flex justify-between items-center w-full">
     <div className="flex justify-between items-center w-full">
     <h2 className="text-xl font-bold">Filters</h2>
     <div className="w-[24px] h-[24px] opacity-40" />
     <Image src="/filterlogo.png" alt="logo" width={24} height={24}/>
     </div>
     </div>
      
      <div className="w-full h-px bg-black/10" />

      {/* Categories */}
      <div className="w-full space-y-5">
        {categories.map((category) => (
          <div key={category} className="flex justify-between items-center">
            <span className="text-base text-black/60">{category}</span>
            <ChevronDown className="w-4 h-4 text-black/60" />
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-black/10" />

      {/* Price Range */}
      <Collapsible
        open={openSections.price}
        onOpenChange={(open) => setOpenSections({ ...openSections, price: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Price</h3>
          <CollapsibleTrigger>
            {openSections.price ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-4">
          <Slider
            defaultValue={priceRange}
            max={200}
            min={50}
            step={1}
            onValueChange={setPriceRange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Colors */}
      <Collapsible
        open={openSections.colors}
        onOpenChange={(open) => setOpenSections({ ...openSections, colors: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Colors</h3>
          <CollapsibleTrigger>
            {openSections.colors ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="grid grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-[37px] h-[37px] rounded-full border border-black/20 ${color.class}`}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Sizes */}
      <Collapsible
        open={openSections.size}
        onOpenChange={(open) => setOpenSections({ ...openSections, size: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Size</h3>
          <CollapsibleTrigger>
            {openSections.size ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-5 py-2.5 rounded-[62px] text-sm
                  ${size === "Large" 
                    ? "bg-black text-white font-medium" 
                    : "bg-[#F0F0F0] text-black/60"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="w-full h-px bg-black/10" />

      {/* Dress Style */}
      <Collapsible
        open={openSections.dressStyle}
        onOpenChange={(open) => setOpenSections({ ...openSections, dressStyle: open })}
        className="w-full space-y-5"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Dress Style</h3>
          <CollapsibleTrigger>
            {openSections.dressStyle ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-5">
            {dressStyles.map((style) => (
              <div key={style} className="flex justify-between items-center">
                <span className="text-base text-black/60">{style}</span>
                <ChevronDown className="w-4 h-4 text-black/60" />
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Apply Filter Button */}
      <button className="w-full h-12 bg-black text-white rounded-[62px] text-sm font-medium mt-4">
        Apply Filter
      </button>
    </div>
  )
}

