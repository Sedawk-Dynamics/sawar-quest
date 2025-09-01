"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [requirements, setRequirements] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, requirements }),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage("✅ Your inquiry has been sent successfully!")
        setName("")
        setEmail("")
        setPhone("")
        setRequirements("")
      } else {
        setMessage("❌ Failed to send inquiry: " + data.error)
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-bl from-noir to-velvet relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Concierge Line */}
            <Card className="bg-pearl/95 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Phone className="h-6 w-6 mb-3 text-velvet" />
              <h3 className="text-lg font-semibold text-noir mb-2">
                Concierge Line
              </h3>
              <p className="text-sm text-charcoal">
                Available 24/7 for immediate assistance
                +91 87599 34567
              </p>
            </Card>

            {/* Private Email */}
            <Card className="bg-pearl/95 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Mail className="h-6 w-6 mb-3 text-velvet" />
              <h3 className="text-lg font-semibold text-noir mb-2">
                Private Email
              </h3>
              <p className="text-sm text-charcoal">CONNECT@SAWARI.LUXE</p>
              <p className="text-sm text-charcoal">
                Exclusive communication channel
              </p>
            </Card>

            {/* Executive Office */}
            <Card className="bg-pearl/95 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <MapPin className="h-6 w-6 mb-3 text-velvet" />
              <h3 className="text-lg font-semibold text-noir mb-2">
                Executive Office
              </h3>
              <p className="text-sm text-charcoal">
                6-3-74/3, Punjagutta, Greenlands, Hyderabad - 500016
              </p>
              <p className="text-sm text-charcoal">
                Visit our premium headquarters
              </p>
            </Card>

            {/* Service Hours */}
            <Card className="bg-pearl/95 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Clock className="h-6 w-6 mb-3 text-velvet" />
              <h3 className="text-lg font-semibold text-noir mb-2">
                Service Hours
              </h3>
              <p className="text-sm text-charcoal">24/7 Available</p>
              <p className="text-sm text-charcoal">
                Always at your distinguished service
              </p>
            </Card>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="bg-pearl/95 backdrop-blur-sm border border-desert/20 hover:border-desert/40 transition-all duration-300 hover:shadow-xl hover:shadow-desert/10">
              <CardContent className="p-10">
                <h3 className="text-2xl font-poppins font-poppins-bold text-velvet mb-8 text-center tracking-wide">
                  Private Inquiry
                </h3>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-3">
                      <Label className="text-velvet font-inter font-inter-semibold tracking-wide">
                        Full Name
                      </Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="h-12 bg-white/80 border border-desert/30 focus:border-desert text-velvet placeholder-velvet/50 rounded-lg font-inter font-inter-medium tracking-wide"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <Label className="text-velvet font-inter font-inter-semibold tracking-wide">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="h-12 bg-white/80 border border-desert/30 focus:border-desert text-velvet placeholder-velvet/50 rounded-lg font-inter font-inter-medium tracking-wide"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <Label className="text-velvet font-inter font-inter-semibold tracking-wide">
                      Phone Number
                    </Label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="h-12 bg-white/80 border border-desert/30 focus:border-desert text-velvet placeholder-velvet/50 rounded-lg font-inter font-inter-medium tracking-wide"
                      required
                    />
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <Label className="text-velvet font-inter font-inter-semibold tracking-wide">
                      Your Requirements
                    </Label>
                    <Textarea
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Describe your luxury transportation needs..."
                      rows={5}
                      className="bg-white/80 border border-desert/30 focus:border-desert text-velvet placeholder-velvet/50 rounded-lg font-inter font-inter-medium tracking-wide"
                      required
                    />
                  </div>

                  {/* Message */}
                  {message && (
                    <p className="text-center text-sm font-medium text-velvet">
                      {message}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-velvet hover:bg-velvet/90 text-pearl rounded-lg font-inter font-inter-semibold tracking-wide flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
