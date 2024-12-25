"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ReviewCard } from "./reviews-card"
import { LayoutGrid, SlidersHorizontal, ChevronDown } from 'lucide-react'

const reviews = [
  {
    name: "Samantha D.",
    rating: 4.5,
    date: "August 14, 2023",
    content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    isVerified: true,
  },
  {
    name: "Alex M.",
    rating: 4,
    date: "August 15, 2023",
    content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    isVerified: true,
  },
  {
    name: "Ethan R.",
    rating: 3.5,
    date: "August 16, 2023",
    content: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    isVerified: true,
  },
  {
    name: "Olivia P.",
    rating: 4,
    date: "August 17, 2023",
    content: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    isVerified: true,
  },
  {
    name: "Liam K.",
    rating: 4,
    date: "August 18, 2023",
    content: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    isVerified: true,
  },
  {
    name: "Ava H.",
    rating: 4.5,
    date: "August 19, 2023",
    content: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    isVerified: true,
  },
]

export default function ReviewsSection() {
  const [sortBy, setSortBy] = useState('latest')

  return (
    <section className="py-8  ">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="md:text-2xl text-1xl font-bold">All Reviews</h2>
            <span className="text-base text-muted-foreground">(451)</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hidden md:flex">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[130px] justify-between">
                  {sortBy === 'latest' ? 'Latest' : sortBy === 'highest' ? 'Highest Rated' : 'Lowest Rated'}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('latest')}
                >
                  Latest
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('highest')}
                >
                  Highest Rated
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => setSortBy('lowest')}
                >
                  Lowest Rated
                </Button>
              </PopoverContent>
            </Popover>
            <Button className="bg-black text-white hover:bg-black/90">Write a Review</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

