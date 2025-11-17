"use client"

import { Advantages } from "./advantages"

export function Hero() {
  // Get current month and year
  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-4 lg:py-6 overflow-hidden"
      style={{ backgroundImage: "url('/luxury-casino-chips-cards-dark-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/85 border-t-4 border-b-4 border-red-600"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      {/* </CHANGE> */}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto border-2 border-red-600/30 rounded-lg p-2 md:p-4 bg-black/20">
          {/* </CHANGE> */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 whitespace-nowrap">
              <span className="text-white">Melhores Casinos </span>
              <span className="text-red-500">Portugal </span>
              <span className="text-yellow-500">2025</span>
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="text-[8px] md:text-sm text-yellow-500 font-medium tracking-wide">
                ATUALIZADO {currentMonth.toUpperCase()} {currentYear}
              </span>
            </div>

          <p className="text-[10px] md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed">
            Descubra os <span className="text-yellow-500 font-medium">melhores bónus</span>, 
            <span className="text-yellow-500 font-medium"> levantamentos rápidos</span> e 
            <span className="text-yellow-500 font-medium"> casinos confiáveis</span>
          </p>

          <div className="block md:hidden mb-2">
            <Advantages />
          </div>

          <div className="hidden md:block mb-4">
            <Advantages />
          </div>
        </div>
      </div>
    </section>
  )
}
