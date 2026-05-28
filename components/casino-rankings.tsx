"use client"

import { Star } from 'lucide-react'
import { Button } from "./ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "./data/casinos"
import Link from 'next/link'

/** Рендер однієї частково заповненої зірки */
function PartialStar({
  fillPercent,
  size = "h-4 w-4",
}: {
  /** 0..100 — скільки % зірки залито */
  fillPercent: number
  size?: string
}) {
  const clamped = Math.max(0, Math.min(100, fillPercent))
  return (
    <div className={`relative inline-block ${size}`} aria-hidden="true">
      {/* Базовий контур (порожня зірка з обведенням) */}
      <Star className={`absolute inset-0 text-gray-700 ${size}`} />
      {/* Заповнена частина */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${clamped}%` }}
      >
        <Star className={`text-yellow-500 fill-current ${size}`} />
      </div>
    </div>
  )
}

/** Рейтинг у зірках 0..5 із кроком 0.2 (на основі rating 0..10) */
function StarRating({
  rating10,
  size = "h-4 w-4",
  gapClass = "gap-0.5",
}: {
  rating10: number
  size?: string
  gapClass?: string
}) {
  const rating5 = Math.max(0, Math.min(10, rating10)) / 2
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fill = Math.max(0, Math.min(1, rating5 - i))
    return <PartialStar key={i} fillPercent={fill * 100} size={size} />
  })

  return <div className={`flex items-center ${gapClass}`}>{stars}</div>
}

export function CasinoRankings() {
  return (
    <section id="rankings" className="py-2 md:py-4 bg-black">
      <div className="container mx-auto px-4">
        

        <div className="max-w-6xl mx-auto">
          {casinos.map((casino) => (
            <Link
              key={casino.rank}
              href={casino.url}
              target="_blank"
              rel="noopener referrer"
            >
              <Card
                className={`border-2 cursor-pointer transition-all duration-300 hover:border-yellow-500/80 relative overflow-hidden mb-2.5 md:mb-8 ${
                  casino.rank === 1
                    ? "border-yellow-500/80 bg-gradient-to-r from-zinc-900 to-black"
                    : "border-gray-800 bg-gradient-to-r from-zinc-900 to-black"
                }`}
              >
              <CardContent className="p-3 md:p-8 relative z-10">
                {casino.rank === 1 && (
                  <Badge className="absolute top-0 left-0 bg-yellow-500 text-black font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    LEGJOBB KASZINÓ
                  </Badge>
                )}
                {casino.rank === 2 && (
                  <Badge className="absolute top-0 left-0 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    AJÁNLOTT
                  </Badge>
                )}
                {casino.rank === 3 && (
                  <Badge className="absolute top-0 left-0 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    NÉPSZERŰ
                  </Badge>
                )}
                
                <div
                  className={
                    casino.rank <= 3 ? "pt-7 md:pt-0" : "pt-1 md:pt-0"
                  }
                >
                  {/* Mobile: First Row - Logo + Bonus */}
                  <div className="flex md:hidden items-center gap-2 mb-2">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="bg-black rounded-md p-1.5 border border-white/10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-12 object-contain w-auto max-w-[100px]"
                        />
                      </div>
                    </div>
                    
                    {/* Bonus */}
                    <div className="flex-1 text-center min-w-0">
                      <div className="text-[9px] text-gray-400 mb-0.5 uppercase tracking-wide">
                        Üdvözlő bónusz
                      </div>
                      <div className="text-yellow-500 font-bold text-[10px] sm:text-xs leading-tight">
                        {casino.bonus}
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Second Row - Rating + Stars/Reviews + Button */}
                  <div className="flex md:hidden items-center gap-2 justify-between px-0.5">
                    {/* Rating */}
                    <div className="flex-shrink-0 text-center items-center justify-center">
                      <span className="text-white font-bold text-xl">{casino.rating.toFixed(1)}</span>
                    </div>
                    
                    {/* Stars + Reviews */}
                    <div className="flex flex-col items-center gap-0.5 min-w-0">
                      <StarRating rating10={casino.rating} size="h-3 w-3" gapClass="gap-px" />
                    </div>
                    
                    {/* Button */}
                    <div className="flex-shrink-0">
                      <Button
                        className={`font-bold px-5 py-2 h-auto text-[10px] transition-all duration-300 ${
                          casino.rank === 1
                            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        JÁTSSZ
                      </Button>
                    </div>
                  </div>

                  {/* Desktop: Single Row - All Elements */}
                  <div className="hidden md:flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="bg-black h-36 items-center flex rounded-lg p-4 border border-white/10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          loading="lazy"
                          width={256}
                          height={200}
                          className="h-26 object-contain mx-auto"
                        />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="flex-1 text-center min-w-0">
                      <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
                        Üdvözlő bónusz
                      </div>
                      <div className="text-yellow-500 font-bold text-lg md:text-2xl leading-tight">
                        {casino.bonus}
                      </div>
                    </div>

                    {/* Rating, Reviews, Stars */}
                    <div className="flex flex-col items-center gap-2">
                    <span className="text-white font-bold text-2xl">{casino.rating.toFixed(1)}</span>
                      <div className="flex items-center gap-3">
                        <StarRating rating10={casino.rating} size="h-5 w-5" gapClass="gap-1" />
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <Button
                        className={`font-bold px-8 py-4 text-sm transition-all duration-300 ${
                          casino.rank === 1
                            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      >
                        JÁTSSZ MOST
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-500 text-xs md:text-sm">
            * A feltételek érvényesek. A szerencsejáték függőséget okozhat. +18
          </p>
        </div>
      </div>
    </section>
  )
}
