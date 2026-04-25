export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  dopBonus?: string
  features: string[]
  isTopChoice?: boolean
  url: string
  reviewCount: number
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "22bet",
    logo: "/22bet.svg",
    rating: 9.8,
    bonus: "1500 EUR + 150 FS",
    dopBonus: "Pacote de boas-vindas",
    features: ["Levantamentos Rápidos", "App Móvel", "Bónus generosos"],
    isTopChoice: true,
    url: "https://qualityboost.top/18Gwf4MC",
    reviewCount: 2847,
  },
  {
    rank: 2,
    name: "SAFECASINO",
    logo: "/safecasino.png",
    rating: 9.7,
    bonus: "100% até 1000 €",
    dopBonus: "+ 300 RG + JOGO DE BÓNUS",
    features: ["Segurança", "Bónus verificados", "Suporte PT"],
    url: "https://qualityboost.top/29pZ3tjZ",
    reviewCount: 2156,
  },
  {
    rank: 3,
    name: "BETLABET",
    logo: "/betlabet.svg",
    rating: 9.6,
    bonus: "1500 EUR + 150 FS",
    dopBonus: "Pacote de boas-vindas",
    features: ["Slots", "Live Casino", "Pagamentos rápidos"],
    url: "https://qualityboost.top/1Wq7B45C",
    reviewCount: 1980,
  },
  {
    rank: 4,
    name: "ZOMBILLION",
    logo: "/zombillion.svg",
    rating: 9.5,
    bonus: "+100% BÔNUS ATÉ 1000 €",
    features: ["Promoções", "Jogos variados", "Mobile"],
    url: "https://qualityboost.top/FKnjwmbn",
    reviewCount: 1721,
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
