"use client"

import Modal from "@/components/modal"
import { motion } from "framer-motion"

interface EducationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
  const educationItems = [
    {
      institution: "Adani University",
      period: "2022 - 2026",
      degree: "ICT",
      score: "CGPA: 7.1",
    },
    {
      institution: "Kendriya Vidyalaya No.1",
      period: "2020 - 2022",
      degree: "Class XII",
      score: "Aggregate: 73.6%",
    },
    {
      institution: "Kendriya Vidyalaya No.1",
      period: "2019 - 2020",
      degree: "Class X",
      score: "Aggregate: 87.8%",
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Education">
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="timeline-item"
          >
            <div className="glassmorphism p-4">
              <h3 className="text-lg font-semibold text-white">{item.institution}</h3>
              <p className="text-purple-400">{item.period}</p>
              <div className="mt-2 text-white/80">
                <p>{item.degree}</p>
                <p>{item.score}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Modal>
  )
}

