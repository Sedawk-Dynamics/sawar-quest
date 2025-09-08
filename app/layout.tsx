import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"  // ✅ import Script

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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${inter.variable}`}
    >
      <head>
        {/* ✅ Facebook Pixel Script */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1325988439044816');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="bg-velvet font-inter">
        {/* ✅ NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1325988439044816&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
