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
    name: "Billionaire Spin",
    logo: "/billionaire-spin.svg",
    rating: 9.8,
    bonus: "Até 1.500€ + 250 Rodadas Grátis",
    features: ["Levantamentos Rápidos", "App Móvel", "15% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/ss8DCZQG",
    reviewCount: 2847,
  },
  {
    rank: 2,
    name: "Spinogambino",
    logo: "/spinogambino.svg",
    rating: 9.7,
    bonus: "Até 1.500€ + 250 Rodadas Grátis",
    features: ["Casino Móvel", "Jogos Exclusivos", "Apostas Desportivas"],
    url: "https://qualityboost.top/pqYpQQJ7",
    reviewCount: 2156,
  },
  {
    rank: 3,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.5,
    bonus: "100% até €500 + 200 Rodadas Grátis",
    dopBonus: "",
    features: ["Cashback Semanal", "Rodadas Grátis", "Levantamento Rápido"],
    url: "https://qualityboost.top/4cPkdZPR",
    reviewCount: 1893,
  },
  {
    rank: 4,
    name: "BillyBets",
    logo: "/billybets.webp",
    rating: 9.4,
    bonus: "100% até €500 + 200 Rodadas Grátis",
    dopBonus: "",
    features: ["Bónus de Recarga", "Rodadas Grátis", "Levantamento Rápido"],
    url: "https://qualityboost.top/93mKYgt5",
    reviewCount: 1654,
  },
  {
    rank: 6,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 9.2,
    bonus: "100% até €500 + 200 Rodadas Grátis",
    dopBonus: "",
    features: ["Rodadas Grátis", "Levantamento Rápido"],
    url: "https://qualityboost.top/3VCrr6mB",
    reviewCount: 1421,
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
