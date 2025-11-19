import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Melhores Casinos Online Portugal 2025 | Sites de Casino Mais Bem Avaliados",
  description:
    "Descubra os melhores casinos online em Portugal para 2025. Compare bónus, avaliações e funcionalidades dos sites de casino mais bem avaliados. Operadores licenciados com saques rápidos e suporte 24/7.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
            <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
