"use client"

import { useEffect, useRef } from "react"

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationId = 0

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const baseCount = window.innerWidth < 768 ? 24 : 48
    const particleCount = prefersReducedMotion
      ? Math.floor(baseCount * 0.4)
      : Math.floor(baseCount * (1 + (dpr - 1) * 0.3))

    const particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }

    function setCanvasSize() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    function getColor(): string {
      const root = document.documentElement
      // Prefer semantic token, fallback to raw token, then a sane default
      const fromMuted = getComputedStyle(root).getPropertyValue("--muted-foreground").trim()
      const fromBorder = getComputedStyle(root).getPropertyValue("--border").trim()
      return fromMuted || fromBorder || "rgb(156, 163, 175)" // Tailwind gray-400 fallback
    }

    let color = getColor()

    function init() {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.6,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw particles
      ctx.globalAlpha = 0.8
      ctx.fillStyle = color
      for (const p of particles) {
        // gentle mouse repulsion
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist2 = dx * dx + dy * dy
        if (dist2 < 120 * 120) {
          const force = -120 / Math.max(dist2, 20)
          p.vx += force * dx
          p.vy += force * dy
        }

        p.x += p.vx
        p.y += p.vy

        // soft wrap
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        if (p.y > window.innerHeight + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // subtle connecting lines
      ctx.globalAlpha = 0.25
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < 120 * 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
    }

    function tick() {
      draw()
      animationId = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onResize = () => {
      setCanvasSize()
    }
    const onThemeChange = () => {
      color = getColor()
    }

    // Setup
    setCanvasSize()
    init()
    if (!prefersReducedMotion) {
      tick()
    } else {
      // draw a single static frame for users preferring less motion
      draw()
    }

    // Listeners
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave, { passive: true })
    window.addEventListener("resize", onResize)
    const mo = new MutationObserver(onThemeChange)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", onResize)
      mo.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none" />
}
