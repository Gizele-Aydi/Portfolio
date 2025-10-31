"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, Variants, useInView, easeInOut } from "framer-motion"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const easing = [0.42, 0, 0.58, 1]; 

  const imageVariants: Variants = {
    initial: {
      scale: 0.9,
      opacity: 0,
      rotateY: 30,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut, 
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, -2, 0],
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        scale: { duration: 0.3, ease: easeInOut },
        rotate: {
          duration: 1,
          ease: easeInOut,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  const borderVariants: Variants = {
    initial: { opacity: 0, x: -10, y: -10 },
    animate: {
      opacity: 1,
      x: -16,
      y: -16,
      transition: { duration: 0.8, delay: 0.3, ease: easeInOut },
    },
    hover: {
      x: -20,
      y: -20,
      borderColor: "#FFB6C1",
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.div
        className="text-3xl font-bold mb-8 text-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="text-text text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello! I&apos;m Gisèle, an AI developer and data science enthusiast with a strong foundation in IT and Business Analytics. I love building intelligent systems that transform raw data into actionable insights and exploring the power of machine learning, NLP, and automation to solve real-world problems.
          </motion.p>
          <motion.p
            className="text-text text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I&apos;m currently focused on advancing my expertise in AI-driven development, model deployment, and data engineering to create scalable, data-powered solutions that connect innovation with impact.
          </motion.p>
          <motion.p
            className="text-text text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
          </motion.p>

        </motion.div>
        <div className="flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-md"
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                whileHover="hover"
                variants={imageVariants}
              >
                <Image
                  src="/sources/my_pic.jpg"
                  alt="Gisele"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover z-10 relative"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-md"
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                whileHover="hover"
                variants={borderVariants}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
