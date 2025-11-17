"use client"

import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTopCasino } from "@/data/casinos"

/** Рендер однієї частково заповненої зірки */
function PartialStar({
  fillPercent,
  size = "h-4 w-4",
}: {
  fillPercent: number
  size?: string
}) {
  const clamped = Math.max(0, Math.min(100, fillPercent))
  return (
    <div className={`relative inline-block ${size}`} aria-hidden="true">
      <Star className={`absolute inset-0 text-gray-700 ${size}`} />
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

export function HowWeRank() {
  const criteria = [
    {
      title: "Licença & Segurança",
      description: "Avaliamos apenas casinos com licenças válidas de autoridades reconhecidas",
      weight: "25%",
    },
    {
      title: "Seleção de Jogos",
      description: "Variedade e qualidade de slots, jogos de mesa e opções de dealer ao vivo",
      weight: "20%",
    },
    {
      title: "Bónus & Promoções",
      description: "Bónus de boas-vindas, promoções contínuas e condições de apostas justas",
      weight: "20%",
    },
    {
      title: "Apoio ao Cliente",
      description: "Disponibilidade 24/7, tempos de resposta e qualidade do suporte",
      weight: "15%",
    },
    {
      title: "Métodos de Pagamento",
      description: "Saques rápidos, múltiplas opções de pagamento e taxas baixas",
      weight: "10%",
    },
    {
      title: "Experiência do Utilizador",
      description: "Design do website, compatibilidade móvel e facilidade de uso geral",
      weight: "10%",
    },
  ]

  const topCasino = getTopCasino()

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Como Avaliamos os Casinos
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A nossa equipa de especialistas utiliza um sistema de avaliação abrangente para avaliar todos os aspetos dos casinos online e garantir que recebe as avaliações mais precisas e confiáveis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {criteria.map((criterion, index) => (
              <div 
                key={index} 
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-yellow-500/10 rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold text-yellow-500">
                      {criterion.weight}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">
                      {criterion.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Choice Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            A Nossa Escolha Principal
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
            Após testes e avaliações minuciosas, este casino destaca-se como a nossa recomendação #1 para jogadores portugueses.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 max-w-6xl mx-auto">
          <Card
            className="border cursor-pointer transition-all duration-300 hover:border-yellow-500/50 border-yellow-500/50 relative overflow-hidden"
            onClick={() => handleCardClick(topCasino.url)}
          >
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.4) 0%, transparent 40%),
                  radial-gradient(circle at 80% 50%, rgba(234, 179, 8, 0.4) 0%, transparent 40%),
                  repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255, 255, 255, 0.05) 15px, rgba(255, 255, 255, 0.05) 16px),
                  repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255, 255, 255, 0.03) 15px, rgba(255, 255, 255, 0.03) 16px)
                `,
                backgroundColor: '#1a1508'
              }}
            />
            
            <CardContent className="p-5 md:p-8 relative z-10">
              <Badge className="absolute top-0 left-0 bg-yellow-500 text-black font-bold text-xs px-3 py-1 rounded-tl-lg rounded-br-lg">
                MELHOR CASINO
              </Badge>
              
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 pt-6 md:pt-0">
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 mx-auto md:mx-0 w-fit">
                    <img
                      src={topCasino.logo || "/placeholder.svg"}
                      alt={`${topCasino.name} logo`}
                      className="h-20 md:h-24 object-contain max-w-[200px] w-auto"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
                    Bónus de Boas-Vindas
                  </div>
                  <div className="text-yellow-500 font-bold text-xl md:text-2xl">
                    {topCasino.bonus}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    <StarRating rating10={topCasino.rating} size="h-5 w-5" gapClass="gap-1" />
                    <span className="text-white font-bold text-2xl">{topCasino.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {topCasino.reviewCount} avaliações
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-sm w-full md:w-auto transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(topCasino.url)
                    }}
                  >
                    JOGAR AGORA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
