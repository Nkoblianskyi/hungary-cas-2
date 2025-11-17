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
              Melhores Casinos Portugal
            </span>
          </Link>
          <p className="text-gray-400 text-sm max-w-2xl">
            O seu guia confiável para os melhores casinos online em Portugal. Avaliamos e classificamos apenas
            operadores licenciados e seguros.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 pb-8 border-b border-gray-800">
          <Link
            href="https://www.srij.turismodeportugal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-yellow-500/20 rounded-lg p-4 transition-all hover:border-yellow-500/40"
          >
            <img
              src="/srij.svg"
              alt="SRIJ"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link
            href="https://www.sicad.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/95 border border-yellow-500/20 rounded-lg p-4 transition-all hover:border-yellow-500/40"
          >
            <img
              src="/icad.png"
              alt="SICAD"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/95 border border-yellow-500/20 rounded-lg p-4 transition-all hover:border-yellow-500/40"
          >
            <img src="/gamecare.svg" alt="GamCare" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <Link
            href="https://www.gambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/95 border border-yellow-500/20 rounded-lg p-4 transition-all hover:border-yellow-500/40"
          >
            <img src="/gamble.webp" alt="GambleAware" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <Link
            href="https://www.jogoresponsavel.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-yellow-500/20 rounded-lg p-4 transition-all hover:border-yellow-500/40"
          >
            <img
              src="/jogo2.png"
              alt="Jogo Responsável"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl border-2 border-yellow-500">
            18+
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © 2025 Melhores Casinos Portugal. Todos os direitos reservados. | Jogo Responsável
        </p>
      </div>
    </footer>
  )
}
