"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa"

const projects = [
  {
    title: "Netflix BI Analysis",
    description:
      "Performs Netflix BI analysis using CSV, Excel, and JSON data. Cleaned with Pandas, stored in a MySQL data warehouse, and modeled for fact and dimension analysis. Visualized through interactive Power BI dashboards and Matplotlib.",
    technologies: ["Python", "Pandas", "Matplotlib", "MySQL", "Power BI"],
    github: "https://github.com/Gizele-Aydi/Netflix-BI-analysis",
  },
  {
    title: "Car Resale Data Analysis Management System",
    description:
      "Manages used car resale data through a Java-based system with an interface for data upload, cleaning, processing, and analysis. Uses machine learning to predict car prices based on data, performing regression, correlation, and EDA.",
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
    github: "https://github.com/Gizele-Aydi/Car-Resale-Data-Analysis-Management-System",
  },
  {
    title: "Municipal Theater Management System",
    description:
      "Developed a municipal theater system using Spring with JWT authentication, OAuth2, and email confirmation. Users can register, log in, manage bookings, and view events, while admins handle CRUD operations on users and events.",
    technologies: ["Spring", "Java", "MongoDB"],
    github: "https://github.com/Gizele-Aydi/Municipal-Theater-Services",
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="projects" className="py-20" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-12 text-accent text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Some Things I&apos;ve Built
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-secondary-bg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <FaFolder className="text-accent text-3xl" />
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-button transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-button transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">{project.title}</h3>
              <p className="text-text mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-[#FAE1DD] text-text text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects

