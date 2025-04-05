"use client"

import Modal from "@/components/modal"
import { motion } from "framer-motion"

interface AboutMeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <p className="text-white/90 leading-relaxed">
          I'm a versatile individual with a passion for both design and technology. From creating eye-catching graphics
          to building user-friendly websites, I love bringing ideas to life through visual and digital design. I also
          enjoy the challenge of competitive programming, always looking to sharpen my coding skills. Whether it's
          designing or coding, I'm driven by the goal of turning ideas into real solutions that make an impact.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Design Philosophy</h3>
            <p className="text-white/80">
              I believe in creating designs that are not only visually appealing but also functional and user-friendly.
              My approach combines aesthetics with practicality to deliver solutions that truly work.
            </p>
          </div>

          <div className="glassmorphism p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Technical Approach</h3>
            <p className="text-white/80">
              I embrace clean, efficient code and modern development practices. I'm constantly learning new technologies
              and techniques to enhance my skills and deliver better solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </Modal>
  )
}

