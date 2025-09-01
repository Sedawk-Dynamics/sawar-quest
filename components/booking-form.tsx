"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, User, Send } from "lucide-react"
import { Car } from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    serviceType: "",
    passengers: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Car Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Luxury Ride</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Car className="h-8 w-8" />
                  </motion.div>
                  Reservation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Personal Information */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="name" className="flex items-center space-x-2 text-gray-700">
                          <User className="h-4 w-4" />
                          <span>Full Name *</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="email" className="text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+971 XX XXX XXXX"
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Location Details */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Journey Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="pickup" className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="h-4 w-4" />
                          <span>Pickup Location *</span>
                        </Label>
                        <Input
                          id="pickup"
                          value={formData.pickupLocation}
                          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                          placeholder="Enter pickup address"
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="dropoff" className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="h-4 w-4" />
                          <span>Drop-off Location *</span>
                        </Label>
                        <Input
                          id="dropoff"
                          value={formData.dropoffLocation}
                          onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                          placeholder="Enter destination address"
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Date and Time */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="pickupDate" className="flex items-center space-x-2 text-gray-700">
                          <Calendar className="h-4 w-4" />
                          <span>Pickup Date *</span>
                        </Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="pickupTime" className="flex items-center space-x-2 text-gray-700">
                          <Clock className="h-4 w-4" />
                          <span>Pickup Time *</span>
                        </Label>
                        <Input
                          id="pickupTime"
                          type="time"
                          value={formData.pickupTime}
                          onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                          className="transition-all duration-300 focus:shadow-lg"
                          required
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="returnDate" className="text-gray-700">
                          Return Date
                        </Label>
                        <Input
                          id="returnDate"
                          type="date"
                          value={formData.returnDate}
                          onChange={(e) => handleInputChange("returnDate", e.target.value)}
                          className="transition-all duration-300 focus:shadow-lg"
                        />
                      </motion.div>

                      <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="returnTime" className="text-gray-700">
                          Return Time
                        </Label>
                        <Input
                          id="returnTime"
                          type="time"
                          value={formData.returnTime}
                          onChange={(e) => handleInputChange("returnTime", e.target.value)}
                          className="transition-all duration-300 focus:shadow-lg"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Service Details */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Service Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType" className="text-gray-700">
                          Service Type *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger className="transition-all duration-300 focus:shadow-lg">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                            <SelectItem value="corporate-travel">Corporate Travel</SelectItem>
                            <SelectItem value="city-tour">City Tour</SelectItem>
                            <SelectItem value="hourly-rental">Hourly Rental</SelectItem>
                            <SelectItem value="special-event">Special Event</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="passengers" className="text-gray-700">
                          Number of Passengers *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("passengers", value)}>
                          <SelectTrigger className="transition-all duration-300 focus:shadow-lg">
                            <SelectValue placeholder="Select passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Passenger</SelectItem>
                            <SelectItem value="2">2 Passengers</SelectItem>
                            <SelectItem value="3">3 Passengers</SelectItem>
                            <SelectItem value="4">4 Passengers</SelectItem>
                            <SelectItem value="5+">5+ Passengers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>

                  {/* Special Requests */}
                  <motion.div variants={itemVariants}>
                    <div className="space-y-2">
                      <Label htmlFor="requests" className="text-gray-700">
                        Special Requests
                      </Label>
                      <Textarea
                        id="requests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="Any special requirements or requests..."
                        rows={4}
                        className="transition-all duration-300 focus:shadow-lg resize-none"
                      />
                    </div>
                  </motion.div>

                  <motion.div className="text-center pt-6" variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" size="lg" className="px-12 py-4 text-lg font-semibold">
                        <Send className="h-5 w-5 mr-2" />
                        Submit Booking Request
                      </Button>
                    </motion.div>
                    <motion.p
                      className="text-sm text-gray-600 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      We'll contact you within 24 hours to confirm your booking
                    </motion.p>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
