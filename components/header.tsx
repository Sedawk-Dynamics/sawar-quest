"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? "backdrop-blur-[10px] shadow-2xl" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Using new logomark */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <div className="relative h-12 w-12">
              <Image
                src="/images/sawari-logomark.png"
                alt="SAWARI Logomark"
                fill
                className="object-contain"
                priority
                sizes="48px"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation - Using Inter */}
          <nav className="hidden lg:flex items-center space-x-12">
            {["Home", "Services", "Fleet", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-desert/90 hover:text-desert font-inter font-inter-medium text-lg tracking-wide transition-all duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-desert to-desert-light rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Contact & CTA - Using Inter */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#contact" className="inline-block">
              <Button className="bg-desert hover:bg-desert-light text-velvet px-8 py-3 font-inter font-inter-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-desert/20 hover:scale-105">
                Reserve Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-desert" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Using Inter */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden py-8 border-t border-desert/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-6">
              {["Home", "Services", "Fleet", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-desert/80 hover:text-desert font-inter font-inter-medium text-lg tracking-wide py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="inline-block" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-desert hover:bg-desert-light text-velvet mt-6 w-full font-inter font-inter-semibold">
                  Reserve Now
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
