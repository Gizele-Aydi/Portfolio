"use client"

import { useRef, useState } from "react"
import { motion, useInView, Variants, Transition, AnimatePresence, easeInOut } from "framer-motion"

interface ExperienceItem {
  title: string
  company: string
  period: string
  duration: string
  location: string
  schoolName?: string
  description: string[]
  certificationLinks?: { label: string; url: string }[]
}

interface CompanyExperience {
  company: string
  logo?: string
  experiences: ExperienceItem[]
}

const companiesData: CompanyExperience[] = [
  {
    company: "Yalors",
    experiences: [
      {
        title: "AI Developer Intern",
        company: "Yalors",
        period: "Jul 2025 - Oct 2025",
        duration: "3 months",
        location: "Ben Arous, Tunisia",
        description: [
          "Built context-aware NLP and embedding services with Node.js, GPT-4o, and OpenAI embeddings.",
          "Developed job recommendation logic using prompt engineering, cosine similarity, and custom scoring.",
          "Stored embeddings in PostgreSQL + pgvector for efficient retrieval and real-time AI job suggestions."
        ],
        certificationLinks: [
          {
            label: "Attestation of Completion",
            url: "/sources/Attestation-de-stage-Yalors.pdf",
          },
        ],
      },
    ],
  },
  {
    company: "YottaByte Dev",
    experiences: [
      {
        title: "Data Scientist Intern",
        company: "YottaByte Dev",
        period: "Jul 2025 - Aug 2025",
        duration: "2 months",
        location: "Tunis, Tunisia",
        description: [
          "Contributed to a dockerized data science pipeline for dataset ingestion, cleaning, EDA, and visualization.",
          "Supported regression, classification, and forecasting (Linear/Logistic, RF, XGBoost, ARIMA, LSTM).",
          "Achieved R² up to 0.97 and 84% accuracy while optimizing runtime to 15–30s with caching."
        ],
        certificationLinks: [
          {
            label: "Attestation of Completion",
            url: "/sources/Attestation-de-stage-YottaByte.pdf",
          },
        ],
      },
    ],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0)

  const selectedCompany = companiesData[selectedCompanyIndex]
  const selectedExperience = selectedCompany.experiences[0]

  const buttonVariants: Variants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.2,
        type: "spring" as const, 
        stiffness: 300,
      } as Transition, 
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      } as Transition,
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3, ease: easeInOut } },
  };

  const bulletVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.12,
        duration: 0.4,
        ease: easeInOut,
      },
    }),
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-12 text-accent text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Professional Experience
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Side - Company Buttons */}
          <motion.div
            className="md:col-span-1 flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {companiesData.map((companyData, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCompanyIndex(index)}
                className="px-4 py-3 rounded-lg font-semibold transition-all text-left"
                style={{
                  backgroundColor: selectedCompanyIndex === index ? "#FFB6C1" : "#FAE1DD",
                  color: selectedCompanyIndex === index ? "#FFFFFF" : "#3A3A3A",
                  border: "2px solid #FFB6C1",
                }}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {companyData.company}
              </motion.button>
            ))}
          </motion.div>

          {/* Right Content - Experience Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompanyIndex}
              className="md:col-span-3"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Title and Role */}
              <motion.div className="mb-6" variants={titleVariants} initial="hidden" animate="visible">
                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#3A3A3A" }}>
                  {selectedExperience.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-lg font-semibold" style={{ color: "#FFB6C1" }}>
                    @ {selectedExperience.company}
                  </span>
                  <span style={{ color: "#3A3A3A" }}>{selectedExperience.period}</span>
                </div>
              </motion.div>

              {/* Description with bullet points */}
              <motion.div
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {selectedExperience.description.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex gap-3 group"
                    custom={itemIndex}
                    variants={bulletVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      className="text-lg flex-shrink-0 mt-0.5 group-hover:scale-125"
                      style={{ color: "#FFB6C1" }}
                      transition={{ duration: 0.2 }}
                    >
                      ▹
                    </motion.span>
                    <motion.p
                      style={{ color: "#3A3A3A" }}
                      className="leading-relaxed group-hover:text-opacity-100"
                      whileHover={{ x: 4 }}
                    >
                      {item}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Certification Links */}
              {selectedExperience.certificationLinks && selectedExperience.certificationLinks.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-3 pt-6 border-t-2"
                  style={{ borderColor: "#FFB6C1" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {selectedExperience.certificationLinks.map((cert, certIndex) => (
                    <motion.a
                      key={certIndex}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
                      style={{
                        backgroundColor: "#c1e3ef",
                        color: "#3A3A3A",
                      }}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 8px 16px rgba(169, 214, 229, 0.35)",
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{cert.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
