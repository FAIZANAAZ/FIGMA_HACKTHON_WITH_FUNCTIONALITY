import { Card, CardContent } from "@/components/ui/card"
import { Star, MoreVertical, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ReviewCardProps {
  name: string
  rating: number
  date: string
  content: string
  isVerified?: boolean
}

export function ReviewCard({ name, rating, date, content }: ReviewCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-7">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-[22px] h-[22px] ${
                      i < rating ? "fill-[#FFC633] text-[#FFC633]" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl">{name}</span>
               
                  <CheckCircle2 className="w-6 h-6 text-[#01AB31]" />
                
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">{content}</p>
          <p className="text-base text-muted-foreground">Posted on {date}</p>
        </div>
      </CardContent>
    </Card>
  )
}

