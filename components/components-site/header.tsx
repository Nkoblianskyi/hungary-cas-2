import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black border-b border-yellow-500/20 sticky top-0 z-40">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center h-10 md:h-10">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Magyarország legjobb kaszinói" width={50} height={50} />
            
          </Link>
        </div>
      </div>
    </header>
  )
}
