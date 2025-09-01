"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Smartphone,
  Download,
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/sawari.luxe",
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com/sawari.luxe",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/sawari-luxe",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/sawari_luxe",
      color: "hover:text-blue-300",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/+918759934567",
      color: "hover:text-green-400",
    },
  ]

  const navigationLinks = ["Home", "Services", "Fleet", "About", "Contact"]

  return (
    <footer className="bg-noir text-desert py-20 relative overflow-hidden">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(30deg, transparent 49%, rgba(201,190,167,0.2) 50%, transparent 51%)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32">
          {/* Brand Section */}
          <div className="">
            <motion.div className="flex items-start mb-8" whileHover={{ scale: 1.05 }}>
              <div className="relative h-24 w-48">
                <Image src="/images/sawari-logo.png" alt="SAWARI Logo" fill className="object-contain" sizes="192px" />
              </div>
            </motion.div>
            {/* Brand description - Using Inter */}
            <p className="text-desert/70 font-inter font-inter-light mb-8 max-w-md leading-relaxed text-lg tracking-wide">
              Dubai-based elevated chauffeur experience delivering white glove services to discerning clients who demand
              sophistication beyond the ordinary.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-4 w-4 text-desert-light" />
                <span className="font-inter font-inter-medium tracking-wide">+91 87599 34567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-4 w-4 text-desert-light" />
                <span className="font-inter font-inter-medium tracking-wide">CONNECT@SAWARI.LUXE</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-4 w-4 text-desert-light" />
                <span className="font-inter font-inter-medium tracking-wide">
                  6-3-74/3, Punjagutta, Greenlands, Hyderabad - 500016
                </span>
              </div>
            </div>

            
          </div>

          <div className="flex flex-col space-y-12">
            {/* Download App Section */}
            <div>
              {/* Section title - Using Poppins */}
              <h3 className="text-xl font-poppins font-poppins-bold mb-8 text-desert-light tracking-wide flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                Scan to download our app
              </h3>

              {/* QR Code Section */}
              <motion.div
                className="bg-pearl/95 backdrop-blur-sm rounded-2xl p-6 px-9 border border-desert/20 hover:border-desert/40 transition-all duration-300 hover:shadow-lg hover:shadow-desert/10 min-w-3xl flex flex-row gap-12 items-center"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* QR Code */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-xl p-2 border border-desert/20">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/apps/details?id=com.sawari.luxe"
                      alt="Download SAWARI App QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col gap-4 content-center">
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.sawari.luxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-velvet hover:bg-velvet-light text-desert px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-velvet/20 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="font-inter font-inter-semibold text-sm tracking-wide">Google Play</span>
                  </motion.a>

                  <motion.a
                    href="https://apps.apple.com/app/sawari-luxe/id123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-desert/20 hover:bg-desert/30 text-velvet px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-desert/20 group border border-desert/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="font-inter font-inter-semibold text-sm tracking-wide">App Store</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
            {/* Social Media Icons */}
            <div className="space-y-4">
              <h4 className="text-lg font-poppins font-poppins-bold text-desert-light tracking-wide">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-desert/10 backdrop-blur-sm border border-desert/20 rounded-xl flex items-center justify-center text-desert/70 transition-all duration-300 hover:bg-desert/20 hover:border-desert/40 hover:scale-110 ${social.color}`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-desert/50 font-inter font-inter-light text-sm tracking-wide">
                Stay connected for exclusive updates and luxury experiences
              </p>
            </div>
          </div>
          {/* Navigation Links Section */}
            <div>
              <h3 className="text-xl font-poppins font-poppins-bold mb-8 text-desert-light tracking-wide">
                Navigation
              </h3>

              <nav className="space-y-4">
                {navigationLinks.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-desert/80 hover:text-desert font-inter font-inter-medium text-lg tracking-wide transition-all duration-300 relative group py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="relative">
                      {item}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-desert to-desert-light rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>
        </div>

        {/* Signature Tagline */}
        <div className="text-center my-12">
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-desert to-transparent rounded-full mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />
          <p className="text-desert/60 font-inter font-inter-light text-sm tracking-widest italic">
            Every detail anticipated. Every mile distinguished
          </p>
        </div>

        <div className="border-t border-desert/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright - Using Inter */}
            <p className="text-desert/50 font-inter font-inter-light tracking-wide">
              © 2025 SAWARI. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Star className="h-4 w-4 text-desert-light fill-current" />
              {/* Rating text - Using Inter */}
              <span className="text-desert-light font-inter font-inter-medium tracking-wide">
                Developed by <a href="https://webel.io/" target="_blank"><strong>Webel.io</strong></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
