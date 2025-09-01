import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SAWARI - Elevated Chauffeur Experience in Dubai",
  description:
    "Dubai-based elevated chauffeur experience delivering white glove services to discerning clients who demand sophistication beyond the ordinary. Premium fleet including GMC, BMW 7 Series, Mercedes S-Class, and Rolls-Royce.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${inter.variable}`}>
      <body className="bg-velvet font-inter">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
