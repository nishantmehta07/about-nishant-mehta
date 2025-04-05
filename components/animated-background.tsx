"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Animated morphing blobs with color transitions */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
        animate={{
          x: ["-20%", "10%", "-10%"],
          y: ["-10%", "20%", "0%"],
          backgroundColor: [
            "rgba(139, 92, 246, 0.2)", // purple-500
            "rgba(109, 40, 217, 0.2)", // purple-700
            "rgba(139, 92, 246, 0.2)", // purple-500
          ],
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "20%" }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        animate={{
          x: ["10%", "-15%", "5%"],
          y: ["5%", "-15%", "10%"],
          backgroundColor: [
            "rgba(79, 70, 229, 0.2)", // indigo-600
            "rgba(124, 58, 237, 0.2)", // purple-600
            "rgba(79, 70, 229, 0.2)", // indigo-600
          ],
          borderRadius: [
            "50% 50% 20% 80%/25% 80% 20% 75%",
            "70% 30% 50% 50%/60% 40% 60% 40%",
            "50% 50% 20% 80%/25% 80% 20% 75%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "15%" }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[100px]"
        animate={{
          x: ["-5%", "15%", "-10%"],
          y: ["10%", "-5%", "15%"],
          backgroundColor: [
            "rgba(217, 70, 239, 0.2)", // fuchsia-600
            "rgba(192, 38, 211, 0.2)", // fuchsia-700
            "rgba(217, 70, 239, 0.2)", // fuchsia-600
          ],
          borderRadius: [
            "40% 60% 70% 30%/40% 40% 60% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "40% 60% 70% 30%/40% 40% 60% 60%",
          ],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ bottom: "5%", left: "30%" }}
      />

      {/* Additional smaller morphing blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        animate={{
          x: ["5%", "-10%", "15%"],
          y: ["-15%", "10%", "-5%"],
          backgroundColor: [
            "rgba(167, 139, 250, 0.2)", // purple-400
            "rgba(196, 181, 253, 0.2)", // purple-300
            "rgba(167, 139, 250, 0.2)", // purple-400
          ],
          borderRadius: [
            "70% 30% 50% 50%/30% 30% 70% 70%",
            "50% 50% 70% 30%/60% 40% 30% 70%",
            "70% 30% 50% 50%/30% 30% 70% 70%",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "60%", right: "40%" }}
      />

      {/* Stars effect */}
      <div className="stars-container absolute inset-0">
        <Stars />
      </div>
    </div>
  )
}

function Stars() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return

    const stars = 150 // Increased number of stars
    const container = starsRef.current

    // Clear any existing stars
    container.innerHTML = ""

    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div")
      const size = Math.random() * 2.5 // Slightly larger stars

      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.position = "absolute"
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.background = "white"
      star.style.borderRadius = "50%"
      star.style.opacity = `${Math.random()}`

      // Add animation with more variety
      const animationDuration = 3 + Math.random() * 10
      star.style.animation = `pulse ${animationDuration}s ease-in-out infinite`
      star.style.animationDelay = `${Math.random() * 5}s`

      // Add occasional twinkle effect
      if (Math.random() > 0.7) {
        star.style.boxShadow = "0 0 3px 1px rgba(255, 255, 255, 0.3)"
      }

      container.appendChild(star)
    }
  }, [])

  return <div ref={starsRef} className="absolute inset-0" />
}

