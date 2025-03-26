"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/sources/Gisele Aydi Resume", external: true },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FAE1DD] shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            className="relative w-10 h-10 mr-2"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="/sources/bunny icon.jpg" alt="Bunny Icon" fill className="rounded-full object-cover" />
          </motion.div>
          <span className="text-2xl font-bold text-accent">Gisele</span>
        </Link>
        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="font-medium"
            >
              {item.external ? (
                <a
                  href={item.href}
                  className="text-text text-lg hover:text-accent transition-colors tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <Link href={item.href} className="text-text text-lg hover:text-accent transition-colors tracking-wide">
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

