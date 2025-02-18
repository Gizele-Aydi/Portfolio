"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="contact" className="py-20">
      <MotionDiv
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </MotionDiv>
      <MotionDiv
        className="text-gray-400 text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m currently looking for new opportunities(internships, part-time jobs..). Whether you have a question or just want to say hi, I&apos;ll get my get back to you!
      </MotionDiv>
      <MotionDiv
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="mailto:your.email@example.com"
          className="bg-teal-400 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-teal-300 transition-colors"
        >
          Say Hello
        </a>
      </MotionDiv>
    </section>
  )
}

export default Contact

