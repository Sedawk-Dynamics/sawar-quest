"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Star, Shield, Crown, Sparkles } from "lucide-react"

export function About() {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Service Locations nationwide" },
    { icon: <Users className="h-6 w-6" />, value: "98%", label: "Punctuality rate" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "White Glove Service" },
    { icon: <Star className="h-6 w-6 fill-current" />, value: "5.0", label: "Perfect Rating" },
  ]

  const values = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Intuitive & Polished",
      description: "We anticipate needs before they're spoken of, demonstrating understanding through actions",
    },
    {
      icon: <Crown className="h-5 w-5" />,
      title: "Effortless & Sophisticated",
      description: "We embody luxury without the pretense, communicating with natural elegance",
    },
    {
      icon: <Star className="h-5 w-5 fill-current" />,
      title: "Timeless & Grounded",
      description: "We deliver luxury with enduring principles that transcend trends",
    },
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-velvet to-noir relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(201,190,167,0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(249,242,232,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              {/* Callout - Using Poppins */}
              <div className="inline-flex items-center space-x-3 bg-desert/10 backdrop-blur-sm border border-desert/30 rounded-full px-8 py-4 mb-8">
                <Sparkles className="h-5 w-5 text-desert fill-current" />
                <span className="text-desert font-poppins font-poppins-medium tracking-widest text-lg uppercase">
                  About Sawari
                </span>
              </div>
              {/* Main Header - Using Poppins */}
              <h2 className="text-5xl lg:text-7xl font-poppins font-poppins-bold text-desert mb-8 tracking-tight">
                CRAFTING
                <span className="block text-desert-light">EXCEPTIONAL</span>
                <span className="block text-desert">JOURNEYS</span>
              </h2>
              {/* Mission Statement - Using Inter */}
              <p className="text-xl text-desert/70 font-inter font-inter-light leading-relaxed tracking-wide mb-8">
                Sawari represents the shared culture of the Emirates and India - the art of hospitality, the pursuit of
                comfort, and the intuitive understanding of our guests' unspoken needs.
              </p>
              <p className="text-lg text-desert/60 font-inter font-inter-regular leading-relaxed tracking-wide mb-8">
                Inspired by this, we offer luxury chauffeur services enhanced with white-glove experiences. Travel
                experiences curated for seasoned luxury connoisseurs and discerning individuals seeking exceptional
                experiences.
              </p>
              <p className="text-lg text-desert/60 font-inter font-inter-regular leading-relaxed tracking-wide mb-12 italic">
                "Sawari - a journey, a quintessential part of your day. We make it better through the art of
                hospitality, the pursuit of comfort, and the intuitive understanding that matches your discerning
                expectations."
              </p>

              {/* The Sawari Standard */}
              <div className="bg-desert/5 backdrop-blur-sm rounded-2xl p-8 border border-desert/10 mb-12">
                <h3 className="text-2xl font-poppins font-poppins-bold text-desert mb-6 tracking-wide">
                  The Sawari Standard
                </h3>
                <p className="text-desert/70 font-inter font-inter-medium leading-relaxed tracking-wide mb-4">
                  At Sawari, luxury lives in the details. We design experiences that honour both your time and your
                  expectations, where exceptional service feels effortless because we've mastered every element.
                </p>
                <p className="text-desert/60 font-inter font-inter-regular leading-relaxed tracking-wide italic">
                  "True luxury isn't about grand gestures, it's the quiet confidence of knowing exactly what you need,
                  exactly when you need it."
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-8">
              {/* Section title - Using Poppins */}
              <h3 className="text-2xl font-poppins font-poppins-bold text-desert tracking-wide">Our Approach</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-desert/5 backdrop-blur-sm rounded-xl border border-desert/10 hover:border-desert/30 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-desert/20 to-desert-light/20 rounded-lg flex items-center justify-center text-desert flex-shrink-0 border border-desert/30">
                      {value.icon}
                    </div>
                    <div>
                      {/* Value title - Using Poppins */}
                      <h4 className="text-lg font-poppins font-poppins-bold text-desert mb-2 tracking-wide">
                        {value.title}
                      </h4>
                      {/* Value description - Using Inter */}
                      <p className="text-desert/70 font-inter font-inter-medium tracking-wide">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-pearl/95 backdrop-blur-sm rounded-2xl p-8 text-center border border-desert/20 hover:border-desert/40 transition-all duration-300 hover:shadow-lg hover:shadow-desert/10"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-maroon/20 to-maroon-light/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-maroon border border-desert/30">
                    {stat.icon}
                  </div>
                  {/* Stat value - Using Poppins */}
                  <div className="text-4xl font-poppins font-poppins-bold text-velvet mb-3">{stat.value}</div>
                  {/* Stat label - Using Inter */}
                  <div className="text-sm font-inter font-inter-medium text-velvet/70 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Luxury Vehicle Showcase */}
            <motion.div
              className="mt-16 space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* GMC Yukon Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 w-full">
                  <img
                    src="https://www.gmcarabia.com/content/dam/gmc/middleeast/master/en/index/suvs/2025-yukon/2025-yukon-capability-3000x1000.jpg?imwidth=2400"
                    alt="GMC Yukon Denali Ultimate - SAWARI Signature"
                    className="w-full h-full object-cover scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-poppins font-poppins-bold text-pearl mb-2 tracking-wide">
                      SAWARI SIGNATURE
                    </h4>
                    <p className="text-desert font-inter font-inter-medium text-sm tracking-wide">
                      GMC Yukon Denali Ultimate - Flagship Excellence
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Luxury Redefined Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 w-full">
                  <img
                    src="/images/luxury-redefined.png"
                    alt="Luxury Redefined - Premium Executive Sedan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-poppins font-poppins-bold text-pearl mb-2 tracking-wide">
                      LUXURY REDEFINED
                    </h4>
                    <p className="text-desert font-inter font-inter-medium text-sm tracking-wide">
                      Executive elegance meets modern sophistication
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Brand Quote */}
              <motion.div
                className="bg-desert/5 backdrop-blur-sm rounded-2xl p-8 border border-desert/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-desert font-inter font-inter-medium text-lg leading-relaxed tracking-wide text-center italic">
                  "More than just a drive, each car is curated to feel like your own, with every detail mastered to your
                  preferences. This is transportation reimagined; where comfort is instinctive, and nothing feels leased
                  or borrowed."
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-desert/10 to-desert-light/10 rounded-full backdrop-blur-sm border border-desert/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-desert/5 to-desert-light/5 rounded-full backdrop-blur-sm border border-desert/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
