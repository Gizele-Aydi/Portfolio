"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400">
          GA
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="hover:text-teal-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-teal-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-teal-400 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              className="hover:text-teal-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

