"use client"

import Modal from "@/components/modal"
import { motion } from "framer-motion"

interface AchievementsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AchievementsModal({ isOpen, onClose }: AchievementsModalProps) {
  const achievements = [
    {
      title: "1st Place – Ingenious Hackathon 6.0",
      description: "Hosted by Ahmedabad University, March 22-23, 2025",
      icon: "🥇",
    },
    {
      title: "Research Publication",
      description:
        '"Revolutionizing Data Centre Sustainability: The Role of Machine Learning in Energy Efficiency" Published in IEEE IATMSI-2024',
      icon: "🧠",
    },
    {
      title: "2nd Place – Code Relay DSA Competition",
      description: "Efficient problem-solving under timed conditions",
      icon: "⚡",
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Achievements">
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="timeline-item"
          >
            <div className="glassmorphism p-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">{achievement.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="text-white/80 mt-1">{achievement.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Modal>
  )
}

