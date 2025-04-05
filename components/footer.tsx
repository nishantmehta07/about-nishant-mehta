"use client"

import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 md:mb-0"
        >
          <p className="text-white/60 text-sm">
            Made with 💜 by <span className="text-purple-400">Nishant Mehta</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
          className="flex space-x-6"
        >
          <motion.a
            href="https://github.com/nishantmehta07"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/nishant-mehta-817aa0255/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="nishant07mehta@gmail.com"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
          <motion.a
            href="https://bit.ly/nishant-mehta-graphic-design-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe size={20} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

