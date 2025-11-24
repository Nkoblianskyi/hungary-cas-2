"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star } from 'lucide-react'
import { getTopCasino } from "@/data/casinos"

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

    useEffect(() => {
    if (!isOpen || typeof window === "undefined") return
    const fn = () => window.updateLinkParams?.()
    // @ts-ignore
    return "requestIdleCallback" in window ? (requestIdleCallback(fn), undefined) : (setTimeout(fn, 100), undefined)
  }, [isOpen])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,referrer")
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:min-w-[400px] lg:max-w-[440px]">
        <Card className="bg-black border-2 border-yellow-500 w-full relative overflow-hidden shadow-2xl shadow-yellow-500/20">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-3 right-3 text-gray-400 hover:text-white z-20 transition-colors bg-black/50 rounded-full p-1 hover:bg-black/70"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black text-center py-4 px-6 font-black text-sm md:text-base border-b-2 border-yellow-500">
            <div className="flex items-center justify-center gap-2">
              
              <p className="tracking-wide">ESCOLHA DO EDITOR ESTA SEMANA</p>
              
            </div>
          </div>

          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-4 sm:mb-6 mt-2 sm:mt-3">
              <div className="bg-white/5 rounded-xl shadow-xl mx-auto w-fit p-4 border border-yellow-500/20">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  loading="lazy"
                  width={256}
                  height={170}
                  className="h-24 sm:h-28 w-auto mx-auto"
                />
              </div>
            </div>

            <div className="mb-4 sm:mb-6 bg-yellow-500/10 rounded-xl p-4 sm:p-5 border border-yellow-500/20">
              <p className="text-yellow-500 text-xs sm:text-sm mb-2 font-bold uppercase tracking-wide">
                Bónus de Boas-Vindas Exclusivo
              </p>
              <div className="text-base sm:text-lg md:text-xl font-bold space-y-1">
                <div className="text-yellow-400">100% até 500€</div>
                <div className="text-yellow-400">+ 100 Rodadas Grátis</div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-white">{topCasino.rating.toFixed(1)}</span>
                <span className="text-gray-500">/10</span>
              </div>
            </div>

            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 sm:py-4 text-sm sm:text-base shadow-xl shadow-yellow-500/30 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation()
                handleModalClick()
              }}
            >
              JOGAR AGORA →
            </Button>

            <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">
              * Aplicam-se os Termos e Condições. Apenas 18+.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
