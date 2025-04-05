"use client"

import type React from "react"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Card } from "@/components/ui/card"
import AboutMeModal from "@/components/modals/about-me-modal"
import EducationModal from "@/components/modals/education-modal"
import SkillsModal from "@/components/modals/skills-modal"
import ProjectsModal from "@/components/modals/projects-modal"
import AchievementsModal from "@/components/modals/achievements-modal"
import ContactModal from "@/components/modals/contact-modal"
import SocialLinks from "@/components/social-links"

export default function Hero() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [clickedCard, setClickedCard] = useState<string | null>(null)
  const controls = useAnimation()

  const closeModal = () => {
    setActiveModal(null)
    setClickedCard(null)
  }

  const cards = [
    { id: "about", title: "About Me", icon: "👤" },
    { id: "education", title: "Education", icon: "🎓" },
    { id: "skills", title: "Skills", icon: "⚙️" },
    { id: "projects", title: "Projects", icon: "💼" },
    { id: "achievements", title: "Achievements", icon: "🏆" },
    { id: "contact", title: "Contact", icon: "📬" },
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Function to create explosion particles
  const createParticles = (x: number, y: number) => {
    const container = document.createElement("div")
    container.style.position = "fixed"
    container.style.left = "0"
    container.style.top = "0"
    container.style.width = "100%"
    container.style.height = "100%"
    container.style.pointerEvents = "none"
    container.style.zIndex = "100"
    document.body.appendChild(container)

    const colors = ["#8b5cf6", "#c4b5fd", "#a78bfa", "#7c3aed", "#6d28d9"]

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      const size = Math.random() * 10 + 5
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 200 + 50
      const tx = Math.cos(angle) * distance
      const ty = Math.sin(angle) * distance

      particle.style.setProperty("--tx", `${tx}px`)
      particle.style.setProperty("--ty", `${ty}px`)

      container.appendChild(particle)
    }

    setTimeout(() => {
      document.body.removeChild(container)
    }, 1000)
  }

  const handleCardClick = (id: string, e: React.MouseEvent) => {
    // Get the position of the click for particle effect
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY

    // Create explosion particles
    createParticles(x, y)

    // Set the clicked card to animate it
    setClickedCard(id)

    // After a short delay, open the modal
    setTimeout(() => {
      setActiveModal(id)
    }, 500)
  }

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-purple-500">Nishant Mehta</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A versatile individual with a passion for design and technology, bringing ideas to life through visual and
            digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(149, 76, 233, 0.4)",
              }}
              className={`card-tilt ${clickedCard === card.id ? "scale-110 opacity-0" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card
                className="glassmorphism h-48 cursor-pointer overflow-hidden glow-on-hover shimmer"
                onClick={(e) => handleCardClick(card.id, e)}
              >
                <div className="h-full flex flex-col items-center justify-center p-6 relative card-content">
                  {/* Diagonal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent pointer-events-none" />

                  <motion.span
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.span>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Social Links */}
        <SocialLinks />
      </div>

      {/* Modals */}
      <AboutMeModal isOpen={activeModal === "about"} onClose={closeModal} />
      <EducationModal isOpen={activeModal === "education"} onClose={closeModal} />
      <SkillsModal isOpen={activeModal === "skills"} onClose={closeModal} />
      <ProjectsModal isOpen={activeModal === "projects"} onClose={closeModal} />
      <AchievementsModal isOpen={activeModal === "achievements"} onClose={closeModal} />
      <ContactModal isOpen={activeModal === "contact"} onClose={closeModal} />
    </section>
  )
}

