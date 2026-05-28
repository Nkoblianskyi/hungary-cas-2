import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Magyarország Legjobb Kaszinói 2026 | Legmagasabbra Értékelt Oldalak",
  description:
    "Fedezze fel Magyarország legjobb online kaszinóit 2026-ra. Hasonlítsa össze a bónuszokat, értékeléseket és funkciókat. Licencelt üzemeltetők gyors kifizetéssel és 24/7 magyar ügyfélszolgálattal.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu-HU">
            <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
