"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      position: "CEO, Emirates Business Group",
      content:
        "Exceptional service! SAWARI QUEST has been our go-to for all corporate transportation needs. Professional, reliable, and luxurious.",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sarah Johnson",
      position: "Event Manager, Dubai Hotels",
      content:
        "Outstanding experience from booking to drop-off. The chauffeurs are professional and the vehicles are immaculate. Highly recommended!",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Mohammed Hassan",
      position: "Director, Al-Noor Industries",
      content:
        "Premium service that exceeds expectations. Perfect for business meetings and special occasions. SAWARI QUEST delivers excellence every time.",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 font-black text-lg mb-6">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            WHAT OUR
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              CLIENTS SAY
            </span>
          </h2>
          <p className="text-2xl font-bold text-blue-100 max-w-4xl mx-auto">
            Discover why thousands of clients trust SAWARI QUEST for their luxury transportation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 h-full shadow-2xl">
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg font-semibold text-white mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-xl font-black text-white mb-1">{testimonial.name}</h4>
                    <p className="text-blue-200 font-bold text-sm">{testimonial.position}</p>
                  </div>

                  {/* Decorative Element */}
                  <div
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full opacity-30`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
