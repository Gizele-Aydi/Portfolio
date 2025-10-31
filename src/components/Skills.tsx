"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence, Variants, easeOut, easeInOut } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning & AI",
    skills: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    title: "NLP & LLMs",
    skills: ["OpenAI APIs", "RAG", "Text Embedding", "Semantic Search", "Groq API"],
  },
  {
    title: "Data Manipulation & Analysis",
    skills: ["Pandas", "NumPy", "SQL", "Power BI", "Excel"],
  },
  {
    title: "Backend Development",
    skills: ["Flask", "FastAPI", "Node.js", "Express.js", "SpringBoot", "REST APIs"],
  },
  {
    title: "Databases & Data Management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase", "Prisma ORM"],
  },
  {
    title: "Cloud, DevOps & CI/CD",
    skills: ["Azure Cloud", "Docker", "Postman", "Insomnia", "Git", "GitHub"],
  },
  {
    title: "Front-End Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Java", "Kotlin", "C"],
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set())

  useEffect(() => {
    setExpandedCategories(new Set())
  }, [])

  const toggleCategory = (index: number) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCategories(newExpanded)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
        type: "spring", // TS accepts "spring" string here
        stiffness: 100,
      },
    },
  }

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, rotateZ: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
    hover: {
      scale: 1.1,
      y: -4,
      boxShadow: "0 12px 24px rgba(255, 182, 193, 0.25)",
      transition: { duration: 0.25, ease: easeInOut },
    },
  }

  const skillsContainerVariants: Variants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: 12,
      transition: {
        duration: 0.4,
        ease: easeInOut,
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.3, ease: easeInOut } },
  }

  const chevronVariants: Variants = {
    collapsed: { rotate: 0, transition: { duration: 0.3, ease: easeInOut } },
    expanded: { rotate: 180, transition: { duration: 0.3, ease: easeInOut } },
  }

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-12 text-accent text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={categoryVariants} className="flex flex-col">
            <motion.button
              onClick={() => toggleCategory(categoryIndex)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all font-bold text-base"
              style={{
                backgroundColor: "#FAE1DD",
                color: "#3A3A3A",
                border: "1.5px solid #FFB6C1",
              }}
              whileHover={{
                backgroundColor: "#FFE8ED",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{category.title}</h3>
              <motion.div
                variants={chevronVariants}
                animate={expandedCategories.has(categoryIndex) ? "expanded" : "collapsed"}
              >
                <ChevronDown size={20} style={{ color: "#FFB6C1" }} />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false} mode="wait">
              {expandedCategories.has(categoryIndex) && (
                <motion.div
                  variants={skillsContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover="hover"
                        className="px-3 py-2 rounded-full transition-all cursor-default"
                        style={{
                          backgroundColor: "#FDF7F2",
                          color: "#3A3A3A",
                          border: "1.5px solid #FFB6C1",
                        }}
                      >
                        <span className="font-medium text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
