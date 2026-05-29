export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  dopBonus?: string
  reviewCount: number
  features: string[]
  isTopChoice?: boolean
  url: string
}

interface BaseCasino {
  name: string
  logo: string
  bonus: string
  features: string[]
  url: string
}

const bonusHungary = "250% akár 1.200.000 Ft + 350 IP + 1 Bonus Crab"

const baseCasinos: BaseCasino[] = [
  {
    name: "VegasHero",
    logo: "/vegashero.webp",
    bonus: "100% akár 200.000 Ft + 200 IP",
    features: ["Jackpot játékok", "Vegas hangulat", "Gyors fizetés"],
    url: "https://qualityboost.top/L1KQGHC7",
  },
  {
    name: "Casoola",
    logo: "/casola.png",
    bonus: "100% akár 200.000 Ft + 200 IP",
    features: ["Exkluzív bónuszok", "Élő kaszinó", "Gyors kifizetés"],
    url: "https://qualityboost.top/gxXhrkX2",
  },
  {
    name: "Lizaro",
    logo: "/lizaro.webp",
    bonus: "350% akár 6.400.000 Ft + 350 IP",
    features: ["Mega bónusz", "Ingyenes pörgetések", "Gyors kifizetés"],
    url: "https://qualityboost.top/WNWmW2ZK",
  },
  {
    name: "Millioner",
    logo: "/millioner.webp",
    bonus: "200% akár 1.000.000 Ft + 300 IP",
    features: ["VIP klub", "Élő kaszinó", "Magyar támogatás"],
    url: "https://qualityboost.top/xQ4vxzBr",
  },
  {
    name: "Alawin",
    logo: "/alawin.webp",
    bonus: "300% akár 800.000 Ft + 300 IP + 1 Bonus Crab",
    features: ["Magas bónuszok", "Mobilbarát", "Heti promóciók"],
    url: "https://qualityboost.top/rFQDQjBQ",
  },
  {
    name: "Tikitaka",
    logo: "/tikitaka.svg",
    bonus: "100% akár 200.000 Ft + 200 IP",
    features: ["Sportfogadás", "Versenyek", "24/7 támogatás"],
    url: "https://qualityboost.top/CRJrjhG3",
  },
  {
    name: "Funbet",
    logo: "/funbet.svg",
    bonus: "100% akár 200.000 Ft + 200 IP",
    features: ["Sportfogadás", "Élő közvetítés", "Gyors regisztráció"],
    url: "https://qualityboost.top/tX3WJV9N",
  },
  {
    name: "Divaspin",
    logo: "/divaspin.webp",
    bonus: bonusHungary,
    features: ["Reload bónusz", "Élő osztók", "24/7 ügyfélszolgálat"],
    url: "https://qualityboost.top/jyZ2FpHD",
  },
  {
    name: "Casea",
    logo: "/casea.webp",
    bonus: "350% akár 6.400.000 Ft + 350 IP",
    features: ["Exkluzív játékok", "Élő osztók", "Cashback program"],
    url: "https://qualityboost.top/mRsTtXgb",
  },
  {
    name: "Astromania",
    logo: "/astronomia.png",
    bonus: bonusHungary,
    features: ["Gyors kifizetések", "Élő kaszinó", "VIP program"],
    url: "https://qualityboost.top/KbHS44T9",
  },
]

const ratingsByRank = [9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.0, 8.9]
const reviewCountsByRank = [3247, 2891, 2654, 2412, 2187, 1953, 1724, 1589, 1432, 1287]

function assignRanks(list: BaseCasino[]): Casino[] {
  return list.map((c, i) => ({
    ...c,
    rank: i + 1,
    rating: ratingsByRank[i] ?? 8.5,
    reviewCount: reviewCountsByRank[i] ?? 1000,
    isTopChoice: i === 0,
  }))
}

export const casinos: Casino[] = assignRanks(baseCasinos)

export const getTopCasino = (): Casino => casinos[0]
