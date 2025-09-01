"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Star } from "lucide-react"
import Image from "next/image"

export function Fleet() {
  const vehicles = [
    {
      name: "SAWARI SIGNATURE",
      category: "GMC Yukon - Flagship Excellence",
      image: "/images/fleet/gmc-yukon.jpeg",
      passengers: "Up to 7 passengers",
      rating: 5.0,
      features: [
        "Spacious plush seating",
        "Elevated ride comfort",
        "Bold road presence",
        "Best-in-class audio system",
        "Premium leather seats",
        "In-car fridge",
      ],
      details: {
        seating: "Optional third-row seating for larger groups (up to 6 total including front seat)",
        bootSpace: "Fits up to 4 large suitcases and 2 cabin-size bags",
        bestFor: "Airport transfers, family travel, VIP groups, statement arrivals",
      },
      tagline: "Marina nights, Business Bay mornings - devoted service around the clock",
    },
    {
      name: "SAWARI EXECUTIVE",
      category: "Mercedes S-Class & BMW 7 Series",
      image: "/images/fleet/mercedes-s-class.jpeg",
      passengers: "Up to 3 passengers in the back, 1 in front (4 total)",
      rating: 4.9,
      features: [
        "Spacious bucket seating",
        "Stylish appearance",
        "Superior audio systems",
        "Extra legroom and recline features",
      ],
      details: {
        bootSpace: "Fits up to 2 large suitcases or 3 medium suitcases",
        bestFor: "Corporate travel, formal events, business executives",
      },
      tagline: "Boardrooms to private terminals – sophistication, uninterrupted",
    },
    {
      name: "SAWARI LUXURY/LUXE",
      category: "Lexus ES 300 - Refined Elegance",
      image: "/images/fleet/lexus-rx.jpeg",
      passengers: "2-3 passengers",
      rating: 4.8,
      features: [
        "Premium leather seating",
        "Refined comfort",
        "Ideal for solo or duo travel",
        "Occasional third passenger",
      ],
      details: {
        bootSpace: "Fits up to 2 medium-size suitcases",
        bestFor: "Daily commutes, refined city travel, personal appointments",
      },
      tagline: "Dubai deserves to be experienced in luxury - premium vehicles, master chauffeurs",
    },
    {
      name: "SAWARI SUV",
      category: "Range of Premium SUVs",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg",
      passengers: "4-5 passengers",
      rating: 4.7,
      features: [
        "Commanding road presence",
        "Versatile luxury",
        "Flexible rear and third-row options",
        "Spacious seating",
      ],
      details: {
        bootSpace: "Fits 3-4 large suitcases with optional third-row folded",
        bestFor: "Weekend escapes, shopping days, off-road comfort",
      },
      tagline: "City streets or desert roads – always in command",
    },
  ]

  return (
    <section id="fleet" className="py-32 bg-pearl/95 relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(30deg, transparent 49%, rgba(201,190,167,0.2) 50%, transparent 51%)`,
            backgroundSize: "60px 60px",
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
          {/* Callout - Using Poppins with custom S logo */}
          <div className="inline-flex items-center space-x-3 bg-velvet/10 backdrop-blur-sm border border-velvet/60 rounded-full px-8 py-4 mb-8">
            <div className="relative w-10 h-10">
              <Image src="/images/sawari-no-bg-logo.png" alt="SAWARI Logo" fill className="object-contain" />
            </div>
            <span className="text-velvet font-poppins tracking-widest text-lg uppercase">Impeccable Fleet</span>
          </div>
          {/* Main Header - Using Poppins */}
          <h2 className="text-5xl lg:text-7xl font-poppins font-poppins-bold text-velvet/70 mb-8 tracking-tight">
            PRESTIGIOUS
            <span className="block text-velvet">VEHICLES</span>
          </h2>
          {/* Long subheader - Using Inter */}
          <p className="text-xl text-velvet/70 font-inter font-inter-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Our impeccable fleet of prestigious vehicles including GMC, BMW 7 Series, Mercedes S-Class, and Rolls-Royce
            across Dubai and surrounding emirates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <Card className="bg-velvet backdrop-blur-sm border border-desert/20 hover:border-desert/40 overflow-hidden transition-all duration-500 group hover:shadow-xl hover:shadow-desert/10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-desert/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-pearl/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-desert fill-current" />
                    <span className="text-velvet font-poppins font-poppins-medium text-xs">{vehicle.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Vehicle name - Using Poppins */}
                  <h3 className="text-xl font-poppins font-poppins-bold text-pearl mb-1 tracking-wide">
                    {vehicle.name}
                  </h3>
                  {/* Category - Using Inter */}
                  <p className="text-desert font-inter font-inter-medium text-sm mb-4">{vehicle.category}</p>
                  {/* Passenger info - Using Inter */}
                  <div className="flex items-center space-x-2 text-pearl/70 mb-4 font-inter font-inter-medium text-sm">
                    <Users className="h-3 w-3" />
                    <span>{vehicle.passengers}</span>
                  </div>

                  {/* Detailed Features */}
                  <div className="space-y-3 mb-6">
                    <div className="text-pearl/90 font-inter font-inter-medium text-sm mb-2">
                      <strong>Seating:</strong> {vehicle.passengers}
                    </div>
                    {vehicle.details.seating && (
                      <div className="text-pearl/80 font-inter font-inter-regular text-xs mb-2">
                        {vehicle.details.seating}
                      </div>
                    )}
                    <div className="text-pearl/90 font-inter font-inter-medium text-sm mb-2">
                      <strong>Boot Space:</strong> {vehicle.details.bootSpace}
                    </div>
                    <div className="text-pearl/90 font-inter font-inter-medium text-sm mb-3">
                      <strong>Best For:</strong> {vehicle.details.bestFor}
                    </div>

                    {/* Key Features */}
                    <div className="space-y-1">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-desert rounded-full" />
                          <span className="text-pearl/80 font-inter font-inter-medium text-xs tracking-wide">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tagline */}
                    <div className="mt-4 pt-3 border-t border-desert/20">
                      <p className="text-desert font-inter font-inter-medium text-xs italic text-center">
                        {vehicle.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Button - Using Inter */}
                  <a href="#contact">
                  <Button className="w-full bg-desert hover:bg-desert-light text-velvet font-inter font-inter-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-desert/20 hover:scale-105">
                    Reserve Vehicle
                  </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
