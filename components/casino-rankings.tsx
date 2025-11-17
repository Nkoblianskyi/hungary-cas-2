"use client"

import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "@/data/casinos"

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
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="rankings" className="py-8 md:py-12 bg-black">
      <div className="container mx-auto px-4">
        

        <div className="space-y-3 md:space-y-4 max-w-6xl mx-auto">
          {casinos.map((casino) => (
            <Card
              key={casino.rank}
              className={`border cursor-pointer transition-all duration-300 hover:border-yellow-500/50 relative overflow-hidden ${
                casino.rank === 1
                  ? "border-yellow-500/50 bg-gradient-to-r from-zinc-900 to-black"
                  : "border-gray-800 bg-gradient-to-r from-zinc-900 to-black"
              }`}
              onClick={() => handleCardClick(casino.url)}
            >
              <CardContent className="p-5 md:p-8 relative z-10">
                {casino.rank === 1 && (
                  <Badge className="absolute top-0 left-0 bg-yellow-500 text-black font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    MELHOR CASINO
                  </Badge>
                )}
                {casino.rank === 2 && (
                  <Badge className="absolute top-0 left-0 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    RECOMENDADO
                  </Badge>
                )}
                {casino.rank === 3 && (
                  <Badge className="absolute top-0 left-0 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                    TENDÊNCIAS
                  </Badge>
                )}
                
                <div className="pt-6 md:pt-0">
                  {/* Mobile: First Row - Logo + Bonus */}
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-16 object-contain w-auto max-w-[120px]"
                        />
                      </div>
                    </div>
                    
                    {/* Bonus */}
                    <div className="flex-1 text-center">
                      <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
                        Bónus de Boas-Vindas
                      </div>
                      <div className="text-yellow-500 font-bold text-lg">
                        {casino.bonus}
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Second Row - Rating + Stars/Reviews + Button */}
                  <div className="flex md:hidden items-center gap-3 justify-between">
                    {/* Rating */}
                    <div className="flex-shrink-0">
                      <span className="text-white font-bold text-xl">{casino.rating.toFixed(1)}</span>
                    </div>
                    
                    {/* Stars + Reviews */}
                    <div className="flex flex-col items-center gap-1">
                      <StarRating rating10={casino.rating} size="h-4 w-4" gapClass="gap-0.5" />
                      <div className="text-gray-400 text-xs whitespace-nowrap">
                        {casino.reviewCount} avaliações
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div className="flex-shrink-0">
                      <Button
                        className={`font-bold px-6 py-3 text-xs transition-all duration-300 ${
                          casino.rank === 1
                            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        JOGAR
                      </Button>
                    </div>
                  </div>

                  {/* Desktop: Single Row - All Elements */}
                  <div className="hidden md:flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-24 object-contain max-w-[200px] w-auto"
                        />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="flex-1 text-center">
                      <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
                        Bónus de Boas-Vindas
                      </div>
                      <div className="text-yellow-500 font-bold text-2xl">
                        {casino.bonus}
                      </div>
                    </div>

                    {/* Rating, Reviews, Stars */}
                    <div className="flex flex-col items-center gap-2">
                    <span className="text-white font-bold text-2xl">{casino.rating.toFixed(1)}</span>
                      <div className="flex items-center gap-3">
                        <StarRating rating10={casino.rating} size="h-5 w-5" gapClass="gap-1" />
                        
                      </div>
                      <div className="text-gray-400 text-sm">
                        {casino.reviewCount} avaliações
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
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        JOGAR AGORA
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-500 text-xs md:text-sm">
            * Aplicam-se os Termos e Condições. O jogo pode causar dependência. +18
          </p>
        </div>
      </div>
    </section>
  )
}
