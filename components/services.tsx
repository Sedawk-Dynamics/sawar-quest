"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Shield, Users, MapPin, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Airport Concierge",
      description: "White glove airport transfers with flight monitoring and premium meet & greet services.",
      features: ["Flight Tracking", "VIP Lounge Access", "Luggage Assistance"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Executive Travel",
      description: "Distinguished transportation crafted for business leaders and corporate requirements.",
      features: ["Executive Vehicles", "Professional Chauffeurs", "Confidential Service"],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Bespoke Tours",
      description: "Curated Dubai experiences with knowledgeable guides and sophisticated comfort.",
      features: ["Local Expertise", "Custom Itineraries", "Cultural Insights"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Special Occasions",
      description: "Elevate your memorable moments with our impeccable transportation services.",
      features: ["White Glove Service", "Special Arrangements", "Champagne Service"],
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Chauffeur for a Day",
      description:
        "Unrushed, uninterrupted, unmistakably yours. Reserve a dedicated chauffeur and your preferred vehicle for the day.",
      features: ["Dedicated Service", "Preferred Vehicle", "Seamless Engagement"],
      tagline: "Not a ride, but a rhythm – for those who move on their own terms",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Curated & Thoughtfully Tailored",
      description:
        "Your preferences become our blueprint. From music selection to premium chargers and luxury towelettes.",
      features: ["Personal Preferences", "Premium Amenities", "Flight Tracking"],
      tagline: "For airport transfers, we track your flights in real-time and position chauffeurs accordingly",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Professional Distinction",
      description:
        "Master-trained chauffeurs operate under strict confidentiality agreements. Your privacy is absolute.",
      features: ["Confidentiality Agreements", "Master Training", "Sensitive Calls Protected"],
      tagline: "Take your most sensitive calls without concern",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Beyond Transportation",
      description: "We learn from every ride, ensuring consistent excellence across all your experiences with us.",
      features: ["Learning System", "Comfort Patterns", "Preferred Routes"],
      tagline: "Your comfort patterns, preferred routes, timing preferences; all quietly noted, effortlessly delivered",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-noir to-velvet relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201,190,167,0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(249,242,232,0.2) 0%, transparent 50%)`,
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
          {/* Main Header - Using Poppins */}
          <h2 className="text-5xl lg:text-7xl font-poppins font-poppins-bold text-desert mb-8 tracking-tight">
            EXCEPTIONAL
            <span className="block text-desert-light">EVERY WAY</span>
            <span className="block text-desert">EVERY TIME</span>
          </h2>
          {/* Long subheader - Using Inter */}
          <p className="text-xl text-desert/70 font-inter font-inter-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            We design experiences that honour both your time and your expectations - where exceptional service feels
            effortless because we've mastered every detail.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -20, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full bg-pearl/95 backdrop-blur-sm border border-desert/20 hover:border-desert/40 transition-all duration-500 group hover:shadow-xl hover:shadow-desert/10">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-maroon/20 to-maroon-light/20 rounded-xl flex items-center justify-center mb-8 text-maroon group-hover:scale-110 transition-transform duration-300 border border-desert/30">
                    {service.icon}
                  </div>

                  {/* Content - Service title using Poppins */}
                  <h3 className="text-2xl font-poppins font-poppins-bold text-velvet mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  {/* Description using Inter */}
                  <p className="text-velvet/70 font-inter font-inter-medium mb-8 leading-relaxed tracking-wide">
                    {service.description}
                  </p>

                  {/* Features - Using Inter */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-desert rounded-full" />
                        <span className="text-velvet/80 font-inter font-inter-medium text-sm tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tagline - Using Inter */}
                  {service.tagline && (
                    <p className="text-maroon/70 font-inter font-inter-medium mt-8 leading-relaxed tracking-wide">
                      {service.tagline}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
