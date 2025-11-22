import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CasinoRankings } from "@/components/casino-rankings"
import { HowWeRank } from "@/components/how-we-rank"
import { Footer } from "@/components/footer"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
      <Script src="/link-handler.js" strategy="beforeInteractive" />
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <CasinoRankings />
        <HowWeRank />
        <Footer />
      </div>
    </>
  )
}
