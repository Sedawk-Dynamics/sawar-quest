"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pikaso-untitled-project-2025-08-13-3J2KYLTdBITi48zo48C45Qxx0ZhHc6.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

      {/* Luxury Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201,190,167,0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(249,242,232,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-desert rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] pt-16 sm:pt-20">
          {/* Centered Content */}
          <motion.div
            className="text-center space-y-8 sm:space-y-10 lg:space-y-12 max-w-4xl w-full"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Main Logo - Using existing Sawari logo image */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8">
              <div className="relative h-32 w-56 sm:h-40 sm:w-64 lg:h-48 lg:w-80 mx-auto">
                <Image
                  src="/images/sawari-logo.png"
                  alt="SAWARI Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                />
              </div>
              <div className="w-20 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-desert via-desert-light to-transparent rounded-full mx-auto" />
              {/* Brand taglines - Using Inter */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-desert font-inter font-inter-regular leading-relaxed max-w-3xl mx-auto tracking-wide px-4">
                  Miles Beyond. Leagues Above
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-desert font-inter font-inter-light leading-relaxed max-w-3xl mx-auto tracking-wide px-4">
                  Elevated chauffeur experience delivering white glove services to discerning clients who demand
                  sophistication beyond the ordinary.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons - Using Inter for button text */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 justify-center px-4"
            >
              <a href="#services" className="inline-block w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-desert hover:bg-desert-light text-velvet px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-inter font-inter-semibold tracking-wide group transition-all duration-300 hover:shadow-xl hover:shadow-desert/20 hover:scale-105">
                  <span className="hidden sm:inline">Discover Your Perfect Journey</span>
                  <span className="sm:hidden">Discover Journey</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#fleet" className="inline-block w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-desert/50 text-desert hover:bg-desert hover:text-velvet px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-inter font-inter-medium tracking-wide bg-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-desert/20"
                >
                  View Our Fleet
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
