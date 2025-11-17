"use client"

import { Shield, Zap, Trophy, Clock } from 'lucide-react'

export function Advantages() {
  const advantages = [
    {
      imageUrl: "/flag.png",
      title: "Licenciados",
      description: "100% Seguros",
    },
    {
      icon: Zap,
      title: "Saques Rápidos",
      description: "Até 24h",
    },
    {
      icon: Trophy,
      title: "Melhores Bónus",
      description: "Verificados",
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Em Português",
    },
  ]

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
      {advantages.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            className="p-3 md:p-4"
          >
            <div className="flex flex-col items-center text-center gap-1.5 md:gap-2">
              <div className="bg-yellow-500/10 rounded-full p-2 md:p-2.5">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl || "/placeholder.svg"} 
                    alt={item.title}
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                ) : Icon ? (
                  <Icon className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                ) : null}
              </div>
              <div>
                <div className="text-white font-semibold text-xs md:text-sm">
                  {item.title}
                </div>
                <div className="text-gray-400 text-[10px] md:text-xs">
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
