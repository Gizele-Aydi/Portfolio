"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        className="w-20 h-20 border-4 border-accent rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="relative w-12 h-12">
          <Image src="/sources/bunny icon.jpg" alt="Bunny Icon" fill className="rounded-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
