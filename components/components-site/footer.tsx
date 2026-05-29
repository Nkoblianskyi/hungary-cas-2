import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="flex items-center justify-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Magyarország legjobb kaszinói" width={64} height={64} />
            <span className="text-2xl font-bold text-white mt-2">
              Magyarország legjobb kaszinói
            </span>
          </Link>
          <p className="text-gray-400 text-sm max-w-2xl">
            Megbízható útmutató Magyarország legjobb online kaszinóihoz. Csak engedélyezett és biztonságos
            üzemeltetőket értékelünk és rangsorolunk.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 pb-8 border-b border-gray-800">

          <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl border-2 border-yellow-500">
            18+
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © 2026 Magyarország legjobb kaszinói. Minden jog fenntartva. | Felelős játék
        </p>
      </div>
    </footer>
  )
}
