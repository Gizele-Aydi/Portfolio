"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })

const projects = [
  {
    title: "Netflix BI Analysis",
    description : ["Performs Netflix BI analysis using data from CSV, Excel, and JSON formats. The data is cleaned with Pandas and visualized with Matplotlib. Stored in a MySQL data warehouse, data modeling is performed to identify facts and create dimensions. The model is imported into Power BI, where a fact constellation schema is created and visualized through interactive dashboards."],
    technologies: ["Python", "Pandas", "Matplotlib", "MySQL", "Power BI"],
    github: "https://github.com/Gizele-Aydi/Netflix-BI-analysis"
  },
  {
    title: "Car Resale Data Analysis Management System",
    description: ["Manages used car resale data through a Java-based system, enabling data upload, cleaning, processing, and analysis. The system performs regression, correlation, and exploratory data analysis (EDA), with visualizations displayed on a user-friendly interface. Additionally, it features a machine learning model for predicting the resale price of a car based on specific attributes provided by the user."],
    technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"],
    github: "https://github.com/Gizele-Aydi/Car-Resale-Data-Analysis-Management-System",
  },
  {
    title: "Municipal Theater Management System",
    description: ["Developed a municipal theater system using Spring, enabling users to register, log in, manage bookings, and view events. Admins can perform CRUD operations on user and event data. Features include JWT authentication, role-based access, OAuth2 Google login, and encrypted passwords. Email confirmation is sent upon registration."],
    technologies: ["Spring", "Java", "MongoDB"],
    github: "https://github.com/Gizele-Aydi/Municipal-Theater-Services",
  },
]

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="projects" className="py-20">
      <MotionDiv
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Things II&apos;ve Built
      </MotionDiv>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <MotionDiv
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-teal-400 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

export default Projects

