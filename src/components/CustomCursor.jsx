"use client"

import { useEffect, useRef } from "react"
import cursorImage from "../assets/cursor.png"

export default function CustomCursor() {
  const mainCursor = useRef(null)
  const trailingCursor1 = useRef(null)
  const trailingCursor2 = useRef(null)

  useEffect(() => {
    const updateMousePosition = (e) => {
      const { clientX: x, clientY: y } = e

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`
      }

      if (trailingCursor1.current) {
        setTimeout(() => {
          trailingCursor1.current.style.transform = `translate(${x - 15}px, ${y - 15}px)`
        }, 50) // Small delay for smooth follow effect
      }

      if (trailingCursor2.current) {
        setTimeout(() => {
          trailingCursor2.current.style.transform = `translate(${x - 10}px, ${y - 10}px)`
        }, 100) // Longer delay for trailing effect
      }
    }

    // Use requestAnimationFrame for instant, smooth updates
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => updateMousePosition(e))
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.style.cursor = "default" // Restore cursor on unmount
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={mainCursor}
        className="fixed top-5 left-3 pointer-events-none z-50"
      >
        <img src={cursorImage} alt="Cursor" className="w-6 h-6 rotate-12" />
      </div>

      {/* First Trailing Circle */}
      <div
        ref={trailingCursor1}
        className="fixed top-0 left-0 size-3 bg-yellow-500 rounded-full opacity-50 pointer-events-none z-40"
      ></div>

      {/* Second Trailing Circle */}
      <div
        ref={trailingCursor2}
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full opacity-30 pointer-events-none z-30"
      ></div>
    </>
  )
}
