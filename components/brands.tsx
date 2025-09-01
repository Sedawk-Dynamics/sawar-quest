"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Crown } from "lucide-react"

export function Brands() {
  const brands = [
    {
      name: "Mercedes-Benz",
      logo: "/images/mercedes-logo.png",
      invert: false,
    },
    {
      name: "Audi",
      logo: "/images/audi-logo-new.png",
      invert: false,
    },
    {
      name: "BMW",
      logo: "/images/bmw-logo.png",
      invert: false,
    },
    {
      name: "Jaguar",
      logo: "/images/jaguar-logo.png",
      invert: false,
    },
    {
      name: "Lamborghini",
      logo: "/images/lamborghini-logo.png",
      invert: true,
    },
    {
      name: "Rolls-Royce",
      logo: "/images/rolls-royce-logo.png",
      invert: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, brandName: string) => {
    const target = e.currentTarget
    target.src = `/placeholder.svg?height=48&width=120&text=${encodeURIComponent(brandName)}`
    target.className = "max-h-12 max-w-32 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
  }

  return (
    <section className="py-32 bg-gradient-to-b from-charcoal to-charcoal-light relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(191,163,122,0.2) 50%, transparent 51%)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Callout - Using Poppins */}
          <div className="inline-flex items-center space-x-3 bg-beige/10 backdrop-blur-sm border border-gold/30 rounded-full px-8 py-4 mb-8">
            <Crown className="h-5 w-5 text-gold" />
            <span className="text-beige font-poppins font-poppins-medium tracking-widest text-lg uppercase">
              Our Luxury Brands
            </span>
          </div>
          {/* Main Header - Using Poppins */}
          <h2 className="text-5xl lg:text-7xl font-poppins font-poppins-bold text-beige mb-8 tracking-tight">
            PRESTIGIOUS
            <span className="block text-gold">PARTNERSHIPS</span>
          </h2>
          {/* Long subheader - Using Inter */}
          <p className="text-xl text-beige/70 font-inter font-inter-regular max-w-3xl mx-auto leading-relaxed tracking-wide">
            We proudly feature the world's most distinguished automotive brands, ensuring every journey reflects your
            exceptional taste.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="rounded-2xl p-8 text-center transition-all duration-500 group-hover:bg-beige/5 group-hover:shadow-lg group-hover:shadow-gold/10 p-4">
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className={`max-h-40 max-w-48 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ${
                      brand.invert ? "invert" : ""
                    }`}
                    onError={(e) => handleImageError(e, brand.name)}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16">
          <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Text - Using Inter */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-beige/50 font-inter font-inter-light text-sm tracking-widest uppercase">
            Trusted by Discerning Clients Worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
