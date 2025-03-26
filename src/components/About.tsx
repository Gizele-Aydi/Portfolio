"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const skills = [
  "Python",
  "R",
  "Java",
  "Kotlin",
  "SQL",
  "SQLAlchemy",
  "React",
  "Next.js",
  "Flask",
  "Spring",
  "MySQL",
  "MongoDB",
  "Power BI",
  "Tableau",
  "Git",
  "Docker",
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const imageVariants = {
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
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, -2, 0],
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        scale: { duration: 0.3, ease: "easeInOut" },
        rotate: { duration: 1, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      },
    },
  }

  const borderVariants = {
    initial: {
      opacity: 0,
      x: -10,
      y: -10,
    },
    animate: {
      opacity: 1,
      x: -16,
      y: -16,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      x: -20,
      y: -20,
      borderColor: "#FFB6C1",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const techItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      color: "#0d9488", // teal-600
      transition: { duration: 0.2 },
    },
  }

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
            Hello! I&apos;m Gisele, a passionate data analyst and aspiring data scientist with a solid background in IT
            and Business Analytics. I love turning raw data into meaningful insights, visualizing trends, and leveraging
            machine learning to solve real-world problems.
          </motion.p>
          <motion.p
            className="text-text text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Currently, I&apos;m focused on advancing my skills in data analysis, machine learning, and business
            intelligence while working on projects that bridge the gap between technology and data-driven
            decision-making.
          </motion.p>
          <motion.p
            className="text-text text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Here are a few technologies I&apos;ve been working with recently:
          </motion.p>
          <motion.ul
            className="grid grid-cols-2 gap-3 text-base"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} className="flex items-center" variants={itemVariants}>
                <span className="text-accent mr-2">▹</span>
                <motion.span
                  className="font-medium text-text transition-all"
                  variants={techItemVariants}
                  whileHover="hover"
                >
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </motion.ul>
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
                  unoptimized
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

