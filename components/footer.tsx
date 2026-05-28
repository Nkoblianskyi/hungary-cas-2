import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="flex items-center justify-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Logo" width={64} height={64} />
            <span className="text-2xl font-bold text-white mt-2">
              Magyarország Legjobb Kaszinói
            </span>
          </Link>
          <p className="text-gray-400 text-sm max-w-2xl">
            Megbízható útmutató Magyarország legjobb online kaszinóihoz. Csak licencelt és biztonságos
            üzemeltetőket értékelünk és rangsorolunk.
          </p>
        </div>

        

        <p className="text-gray-500 text-sm text-center">
          © 2026 Magyarország Legjobb Kaszinói. Minden jog fenntartva. | Felelős játék
        </p>
      </div>
    </footer>
  )
}
