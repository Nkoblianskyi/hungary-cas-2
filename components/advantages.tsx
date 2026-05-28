"use client"

import { Shield, Zap, Trophy, Clock } from 'lucide-react'

export function Advantages() {
  const advantages = [
    {
      icon: Shield,
      title: "Licencelt",
      description: "100% biztonságos",
    },
    {
      icon: Zap,
      title: "Gyors kifizetés",
      description: "Akár 24 órán belül",
    },
    {
      icon: Trophy,
      title: "Legjobb bónuszok",
      description: "Ellenőrzött",
    },
    {
      icon: Clock,
      title: "24/7 támogatás",
      description: "Magyar nyelven",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-1 md:gap-4 max-w-4xl mx-auto">
      {advantages.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className="p-0.5 md:p-4 min-w-0"
          >
            <div className="flex flex-col items-center text-center gap-0.5 md:gap-2">
              <div className="bg-yellow-500/10 rounded-full p-1 md:p-2.5">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl || "/placeholder.svg"} 
                    alt={item.title}
                    className="h-3 w-3 md:h-5 md:w-5"
                  />
                ) : Icon ? (
                  <Icon className="h-3 w-3 md:h-5 md:w-5 text-yellow-500" />
                ) : null}
              </div>
              <div className="min-w-0 w-full">
                <div className="text-white font-semibold text-[7px] leading-tight md:text-sm">
                  {item.title}
                </div>
                <div className="hidden md:block text-gray-400 text-[7px] leading-tight md:text-xs mt-0.5">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
