"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-3xl">
        <MotionDiv
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m <span className="text-teal-400">Gisele Aydi.</span>
        </MotionDiv>
        <MotionDiv
          className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I work with data & technology
        </MotionDiv>
        <MotionDiv
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I&apos;m a business IT student specializing in data science, analytics, and web development. 
          Passionate about turning data into insights and building intelligent digital solutions. 
          Currently exploring machine learning and AI-driven applications.
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-teal-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-teal-300 transition-colors"
          >
            Get In Touch
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero

