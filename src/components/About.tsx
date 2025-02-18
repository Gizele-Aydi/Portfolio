"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

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
  "Docker"
]

const About = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="about" className="py-20">
      <MotionDiv
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </MotionDiv>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 mb-4">
          Hello! I&apos;m Gisele, a passionate data analyst and aspiring data scientist with a solid background in IT and Business Analytics. 
          I love turning raw data into meaningful insights, visualizing trends, and leveraging machine learning to solve real-world problems.
          </p>
          <p className="text-gray-300 mb-4">
          Currently, I&apos;m focused on advancing my skills in data analysis, machine learning, and business intelligence while working on projects that bridge the gap between technology and data-driven decision-making.
          </p>
          <p className="text-gray-300 mb-6">Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {skills.map((skill, index) => (
              <MotionDiv
                key={index}
                className="flex items-center text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <span className="text-teal-400 mr-2">▹</span> {skill}
              </MotionDiv>
            ))}
          </ul>
        </MotionDiv>
        <MotionDiv
          className="relative w-full max-w-lg mx-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <Image src="/sources/cv-pic.svg" alt="Gisele" layout="fill" objectFit="cover" className="rounded-md" />
            <div className="absolute inset-0 border-2 border-teal-400 rounded-md -translate-x-4 -translate-y-4"></div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default About

