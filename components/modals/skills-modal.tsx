"use client"

import Modal from "@/components/modal"
import { motion } from "framer-motion"

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["UI/UX", "Figma", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      name: "Backend & Tools",
      skills: ["NodeJS", "Git", "MongoDB", "MySQL", "Gen AI"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Skills">
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">{category.name}</h3>
            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap">
              {category.skills.map((skill, skillIndex) => (
                <motion.span key={skillIndex} variants={item} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Proficiency</h3>
          <div className="space-y-4">
            {[
              { name: "Frontend Development", level: 85 },
              { name: "UI/UX Design", level: 80 },
              { name: "Backend Development", level: 70 },
              { name: "Database Management", level: 75 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-white/90">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

