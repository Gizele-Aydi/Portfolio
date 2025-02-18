"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaPhone} from "react-icons/fa"

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/Gizele-Aydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/gisele-aydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="+216 95 779 235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <FaPhone size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Gisele Aydi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

