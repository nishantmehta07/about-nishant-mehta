"use client"

import Modal from "@/components/modal"
import { motion } from "framer-motion"

interface ProjectsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const projects = [
    {
      title: "E-Library Platform",
      description: "A web-based E-Library platform with personalized book recommendations and a smooth UX.",
      tech: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS", "JWT Auth"],
      features: [
        "Book discovery, search, categorization",
        "User-based recommendation engine",
        "Authentication & role-based access",
      ],
      icon: "📘",
    },
    {
      title: "AI-Powered Investor Dashboard",
      description:
        "A smart investment dashboard that helps retail investors track portfolios and get AI-driven financial predictions.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Hugging Face", "Gemini API", "OpenAI API", "Recharts"],
      features: [
        "Portfolio insights & risk analysis",
        "AI chatbot for finance queries",
        "Tax calculator and goal planning",
      ],
      icon: "📊",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Projects">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(149, 76, 233, 0.6)",
            }}
            className="glassmorphism p-5 transition-all duration-300"
          >
            <div className="flex items-start">
              <motion.span
                className="text-3xl mr-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                {project.icon}
              </motion.span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-white/80 mt-2">{project.description}</p>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-900/40 rounded-md text-xs text-white/90"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(124, 58, 237, 0.5)",
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-white/80"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + featureIndex * 0.1 }}
                      >
                        <motion.span
                          className="text-purple-400 mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2 + featureIndex,
                          }}
                        >
                          ✦
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Modal>
  )
}

