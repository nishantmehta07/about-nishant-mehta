"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/nishantmehta07",
      delay: 0.2,
      color: "#8b5cf6", // purple-500
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/nishant-mehta-817aa0255/",
      delay: 0.3,
      color: "#a78bfa", // purple-400
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "nishant07mehta@gmail.com",
      delay: 0.4,
      color: "#c4b5fd", // purple-300
    },
    {
      icon: <Globe className="h-6 w-6" />,
      href: "https://bit.ly/nishant-mehta-graphic-design-portfolio",
      delay: 0.5,
      color: "#7c3aed", // purple-600
    },
  ]

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col space-y-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-12 h-12 rounded-full flex items-center justify-center glassmorphism"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: link.delay, type: "spring" }}
            whileHover={{
              scale: 1.2,
              boxShadow: `0 0 20px ${link.color}80`,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
              className="text-white"
            >
              {link.icon}
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

