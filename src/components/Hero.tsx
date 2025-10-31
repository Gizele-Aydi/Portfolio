"use client"

import { motion } from "framer-motion"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="min-h-screen flex items-center justify-center mt-16 px-4">
      <motion.div className="max-w-3xl text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-accent font-raleway tracking-tight"
          variants={itemVariants}
        >
          Hi, I&apos;m <span className="text-accent">Gisele Aydi.</span>
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl text-text mb-6 font-raleway tracking-wide"
          variants={itemVariants}
        >
          I work with data & technology
        </motion.h2>
        <motion.p className="text-lg sm:text-xl text-text mb-8 font-raleway" variants={itemVariants}>
          I&apos;m an AI developer and data science enthusiast with a background in business IT and analytics. 
          I build intelligent systems that turn data into real-world impact—from machine learning models and NLP applications to full-stack AI integrations. 
          Passionate about bridging the gap between data, technology, and decision-making through practical, scalable solutions.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
