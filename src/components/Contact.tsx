"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        className="text-3xl font-bold mb-8 text-center text-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.div>
      <motion.div
        className="text-text text-lg text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m currently looking for new opportunities (internships, part-time jobs). Whether you have a question or
        just want to say hi, I&apos;ll get back to you!
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          href="mailto:gisele.aydi@gmail.com"
          className="flex items-center gap-2 bg-button text-text py-3 px-6 rounded-md hover:bg-button transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope />
          <span>Email Me</span>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Contact

