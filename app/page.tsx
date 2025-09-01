import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Fleet } from "@/components/fleet"
import { Contact } from "@/components/contact"
import { Brands } from "@/components/brands"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Fleet />
      <About />
      <Contact />
    </main>
  )
}
