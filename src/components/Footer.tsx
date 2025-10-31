"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
import Image from "next/image"

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Gizele-Aydi", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/gisele-aydi", label: "LinkedIn" },
    { icon: FaPhone, href: "tel:+216 95 779 235", label: "Phone" },
  ]

  return (
    <footer className="bg-[#FAE1DD] py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          className="flex space-x-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              aria-label={link.label}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-8 h-8 mr-2">
            <Image src="/sources/bunny icon.jpg" alt="Bunny Icon" fill className="rounded-full object-cover" />
          </div>
        </motion.div>
        <motion.p
          className="text-text text-base font-raleway"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Gisele Aydi. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
