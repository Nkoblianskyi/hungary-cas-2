"use client"

import { Advantages } from "./advantages"

export function Hero() {
  // Get current month and year
  const currentDate = new Date()
  const monthNames = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-2 md:py-3 lg:py-5 overflow-hidden"
      style={{ backgroundImage: "url('/luxury-casino-chips-cards-dark-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/85 border-t-4 border-b-4 border-red-600"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      {/* </CHANGE> */}

      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
        <div className="max-w-md sm:max-w-xl md:max-w-5xl mx-auto border-2 border-red-600/30 rounded-lg p-1.5 md:p-3 bg-black/20">
          {/* </CHANGE> */}
          <div className="mb-1 md:mb-4">
            <h1 className="text-base sm:text-lg md:text-4xl lg:text-5xl font-bold tracking-tight mb-1 md:mb-3 leading-tight">
              <span className="text-white">Magyarország </span>
              <span className="text-red-500">Legjobb Kaszinói </span>
            </h1>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-2 py-0.5 md:px-4 md:py-1.5 mb-1.5 md:mb-3">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500" />
              <span className="text-[7px] md:text-sm text-yellow-500 font-medium tracking-wide">
                FRISSÍTVE {currentMonth.toUpperCase()} {currentYear}
              </span>
            </div>

          <p className="text-[8px] md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-1.5 md:mb-5 leading-snug md:leading-relaxed px-0.5">
            Fedezze fel a <span className="text-yellow-500 font-medium">legjobb bónuszokat</span>, 
            <span className="text-yellow-500 font-medium"> gyors kifizetéseket</span> és a 
            <span className="text-yellow-500 font-medium">megbízható kaszinókat</span>
          </p>

          <div className="block md:hidden mb-0.5">
            <Advantages />
          </div>

          <div className="hidden md:block mb-2 md:mb-4">
            <Advantages />
          </div>
        </div>
      </div>
    </section>
  )
}
