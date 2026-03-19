"use client"

import type React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Linkedin,
  Calendar,
  Send,
  ArrowUpRight,
  ArrowDown,
  ExternalLink,
} from "lucide-react"
import { useState, useRef } from "react"

/* ─────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────── */

const EXPERIENCE = [
  {
    num: "01",
    role: "Founder's Office — AI & Strategy",
    org: "Helium16",
    location: "Gurgaon",
    period: "Sept 2025 — Present",
    current: true,
    blurb:
      "Spearheading the pivot to HeliumLabs — a unified, AI-assisted data annotation platform across text, audio, and vision modalities.",
    bullets: [
      "Architected investor pitch and modeled unit economics demonstrating 87% gross margins and instant server profitability.",
      "Designed and executed a Product-Led Growth freemium model, building direct acquisition pipelines targeting academic labs and AI startups.",
      "Bridged engineering and business teams to accelerate MVP launch, establish data compliance standards, and secure early enterprise PoC partnerships.",
      "Managed the full product roadmap for multi-modal AI annotation — text, audio, vision.",
    ],
    tags: ["Product Strategy", "PLG", "Fundraising", "GTM"],
  },
  {
    num: "02",
    role: "Growth Manager",
    org: "Deccan AI",
    location: "Hyderabad",
    period: "Mar 2024 — Apr 2025",
    current: false,
    blurb:
      "Orchestrated cross-functional AI product development across RLHF, Red Teaming, and core operations.",
    bullets: [
      "Developed and validated 'Golden Datasets' for RLHF and Agentic workflows, establishing evaluation frameworks that accelerated enterprise product-market fit.",
      "Architected automated eligibility and routing pipelines — processed 500K+ data points, increased throughput by 30%.",
      "Designed internal dashboards tracking latency, token economics — reduced leadership decision turnaround by 25%.",
      "Steered zero-to-one product incubation, managing model non-determinism and edge-case handling for production-grade deployments.",
    ],
    tags: ["RLHF", "Data Pipelines", "RAG", "Product Incubation"],
  },
  {
    num: "03",
    role: "Operations Associate",
    org: "ConvertIAS",
    location: "Bengaluru",
    period: "Jun 2023 — Feb 2024",
    current: false,
    blurb:
      "Foundation-building role in operational excellence, cross-departmental collaboration, and data-driven decision-making.",
    bullets: [
      "Streamlined operational workflows leading to measurably enhanced productivity.",
      "Facilitated cross-departmental communication and implemented operations best practices.",
      "Managed data reporting pipelines to support strategic decision-making.",
    ],
    tags: ["Operations", "Process Optimization", "Data Management"],
  },
]

const SKILLS = [
  { category: "AI & ML", items: ["RLHF & Red Teaming", "Agentic AI Systems", "LLM Evaluation", "Data Annotation Pipelines", "Token Economics"] },
  { category: "Product", items: ["Product Roadmapping", "User Research", "MVP Scoping", "PLG Design", "Metrics & KPIs"] },
  { category: "Growth", items: ["GTM Strategy", "Market Sizing", "Investor Pitch Architecture", "Unit Economics", "Acquisition Funnels"] },
  { category: "Operations", items: ["Process Optimization", "Cross-functional Leadership", "Stakeholder Management", "Data Pipelines", "Compliance"] },
]

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
   ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-amber-400/80 mb-2">
      {children}
    </p>
  )
}

function Rule() {
  return <div className="w-full h-px bg-zinc-800" />
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
      {children}
    </span>
  )
}

function AnimatedCount({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  // Simple intersection observer approach
  useState(() => {
    if (typeof window === "undefined") return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          let start = 0
          const step = Math.max(1, Math.ceil(to / 80))
          const timer = setInterval(() => {
            start += step
            if (start >= to) {
              setCount(to)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    // Defer to next tick so ref is attached
    setTimeout(() => {
      if (ref.current) observer.observe(ref.current)
    }, 0)
    return () => observer.disconnect()
  })

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -60])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Inquiry — Let's Connect")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.open(`mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
    }),
  }

  return (
    <>
      {/* ── Google Fonts ── */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        :root {
          --font-display: "Instrument Serif", Georgia, serif;
          --font-mono: "IBM Plex Mono", "Courier New", monospace;
          --font-body: "DM Sans", system-ui, sans-serif;
        }
      `}</style>

      <div
        className="min-h-screen text-zinc-300 selection:bg-amber-400/20 selection:text-amber-200"
        style={{
          fontFamily: 'var(--font-body)',
          backgroundColor: '#0a0a0b',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      >

        {/* ═══════════════════════════════════════════
            HERO
           ═══════════════════════════════════════════ */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Ambient light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-32"
          >
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <p
                className="text-[11px] uppercase tracking-[0.4em] text-amber-400/70 mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Product Operator &middot; AI Systems &middot; Zero-to-One
              </p>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="mb-8 leading-[0.9] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-[clamp(3.5rem,10vw,9rem)] text-zinc-100">
                Vedank
              </span>
              <span className="block text-[clamp(3.5rem,10vw,9rem)] text-transparent" style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              }}>
                Bhatnagar
              </span>
            </motion.h1>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-3" style={{ fontFamily: "var(--font-body)" }}>
                I translate founder-level ambiguity into shipped MVPs, validated roadmaps, and scalable revenue at AI-first companies.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                2+ years building data infrastructure, RLHF pipelines, and enterprise annotation platforms from zero to one.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-zinc-950 text-sm font-semibold rounded-none hover:bg-amber-300 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/vedankbhr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 text-sm font-medium rounded-none hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-12 left-6 md:left-12"
            >
              <ArrowDown className="h-4 w-4 text-zinc-700" />
            </motion.div>
          </motion.div>

          {/* Side accent line */}
          <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block" />
        </section>

        {/* ═══════════════════════════════════════════
            STATS
           ═══════════════════════════════════════════ */}
        <section className="border-y border-zinc-800/80">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { to: 2, suffix: "+", label: "Years in AI" },
              { to: 500, suffix: "K+", label: "Data Points" },
              { to: 87, suffix: "%", label: "Gross Margins" },
              { to: 30, suffix: "%", label: "Throughput ↑" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <AnimatedCount to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mt-2" style={{ fontFamily: "var(--font-mono)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EXPERIENCE
           ═══════════════════════════════════════════ */}
        <section id="experience" className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionLabel>Employment</SectionLabel>
            <h2
              className="text-4xl md:text-6xl text-zinc-100 tracking-tight mb-20"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where I&rsquo;ve Built
            </h2>

            <div className="space-y-0">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  custom={i * 0.5}
                >
                  {/* Top rule */}
                  <Rule />

                  <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-8 lg:gap-12">
                    {/* Left column — number + period */}
                    <div>
                      <span
                        className="text-5xl md:text-6xl font-light text-zinc-800 block mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {exp.num}
                      </span>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] text-zinc-600"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Right column — content */}
                    <div>
                      <h3
                        className="text-2xl md:text-3xl text-zinc-100 mb-1 tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm text-zinc-500 mb-6"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {exp.org} &middot; {exp.location}
                      </p>

                      <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                        {exp.blurb}
                      </p>

                      <ul className="space-y-3 mb-8 max-w-2xl">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm text-zinc-500 leading-relaxed">
                            <span className="text-amber-400/60 mt-1 shrink-0">—</span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <Rule />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTERNSHIPS & EDUCATION — side by side
           ═══════════════════════════════════════════ */}
        <section id="education" className="py-24 md:py-36 px-6 md:px-12 border-t border-zinc-800/80 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
            {/* Education */}
            <div>
              <SectionLabel>Academics</SectionLabel>
              <h2
                className="text-3xl md:text-4xl text-zinc-100 tracking-tight mb-12"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education
              </h2>

              <div className="space-y-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Aug 2025 — Present
                  </p>
                  <h3 className="text-xl text-zinc-100 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    PGP Rise — General Management
                  </h3>
                  <p className="text-sm text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>
                    Masters&apos; Union &middot; Gurgaon
                  </p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    2020 — 2024
                  </p>
                  <h3 className="text-xl text-zinc-100 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    B.A. Triple Major
                  </h3>
                  <p className="text-sm text-zinc-500 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Christ University &middot; Bengaluru
                  </p>
                  <p className="text-xs text-zinc-600">
                    Journalism · Psychology · English Literature
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Internships */}
            <div>
              <SectionLabel>Early Experience</SectionLabel>
              <h2
                className="text-3xl md:text-4xl text-zinc-100 tracking-tight mb-12"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Internships
              </h2>

              <div className="space-y-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Jun — Jul 2022
                  </p>
                  <h3 className="text-xl text-zinc-100 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Content Writer
                  </h3>
                  <p className="text-sm text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>
                    Rajasthan Patrika &middot; Udaipur
                  </p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Jun — Aug 2021
                  </p>
                  <h3 className="text-xl text-zinc-100 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    Content Writer
                  </h3>
                  <p className="text-sm text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>
                    Earthy Objects &middot; Remote
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROJECTS
           ═══════════════════════════════════════════ */}
        <section id="portfolio" className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionLabel>Work</SectionLabel>
            <h2
              className="text-4xl md:text-6xl text-zinc-100 tracking-tight mb-16"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Selected Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-zinc-800/50">
              {/* HeliumLabs */}
              <motion.a
                href="#"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group bg-[#0a0a0b] p-8 md:p-12 flex flex-col min-h-[320px] hover:bg-zinc-900/60 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600" style={{ fontFamily: "var(--font-mono)" }}>
                    Platform
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <div className="mt-auto">
                  <h3
                    className="text-2xl md:text-3xl text-zinc-100 mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    HeliumLabs
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Unified AI annotation platform for text, audio, and vision. Designed the product roadmap,
                    PLG model, and investor narrative from scratch.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product Roadmap", "Multi-modal AI", "PLG", "Pre-Seed"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.a>

              {/* AI Agent */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="group bg-[#0a0a0b] p-8 md:p-12 flex flex-col min-h-[320px] hover:bg-zinc-900/60 transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600" style={{ fontFamily: "var(--font-mono)" }}>
                    Agent
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <div className="mt-auto">
                  <h3
                    className="text-2xl md:text-3xl text-zinc-100 mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AI Assistant Agent
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Custom conversational AI with real-time dialogue, NLP-driven reasoning, and interactive UX — built for production-grade user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NLP", "Real-time", "Conversational AI", "UX"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                View all projects <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EXPERTISE — Terminal-inspired grid
           ═══════════════════════════════════════════ */}
        <section id="expertise" className="py-24 md:py-36 px-6 md:px-12 border-t border-zinc-800/80 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionLabel>Capabilities</SectionLabel>
            <h2
              className="text-4xl md:text-6xl text-zinc-100 tracking-tight mb-16"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What I Work With
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
              {SKILLS.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.3}
                  className="bg-[#0a0a0b] p-6 md:p-8"
                >
                  <h3
                    className="text-[10px] uppercase tracking-[0.3em] text-amber-400/70 mb-5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {group.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-zinc-500 flex items-center gap-2.5">
                        <span className="w-1 h-px bg-zinc-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CONTACT
           ═══════════════════════════════════════════ */}
        <section id="contact" className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
              {/* Left */}
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2
                  className="text-4xl md:text-5xl text-zinc-100 tracking-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let&rsquo;s build
                  <br />
                  something{" "}
                  <span className="italic text-amber-400/90">together.</span>
                </h2>
                <p className="text-zinc-500 leading-relaxed mb-10 max-w-md">
                  Open to product roles, AI collaborations, advisory work, and interesting conversations about the future of data infrastructure.
                </p>

                <div className="space-y-6">
                  {[
                    { label: "Email", value: "vedankbhatnagar165@gmail.com", href: "mailto:vedankbhatnagar165@gmail.com" },
                    { label: "Phone", value: "+91 7426019793", href: "tel:+917426019793" },
                    { label: "LinkedIn", value: "vedankbhr", href: "https://www.linkedin.com/in/vedankbhr" },
                    { label: "Location", value: "Gurgaon, India" },
                  ].map((item) => (
                    <div key={item.label} className="group flex items-baseline gap-4">
                      <span
                        className="text-[10px] uppercase tracking-[0.3em] text-zinc-700 w-16 shrink-0"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-zinc-400 hover:text-amber-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-zinc-400">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="border border-zinc-800/80 p-8 md:p-12 bg-zinc-900/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-zinc-800 pb-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-amber-400/50 focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-transparent border-b border-zinc-800 pb-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-amber-400/50 focus:outline-none transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-zinc-800 pb-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-amber-400/50 focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="Tell me about your project…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-amber-300 transition-colors mt-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-zinc-800/80 py-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-700" style={{ fontFamily: "var(--font-mono)" }}>
              &copy; {new Date().getFullYear()} Vedank Bhatnagar
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:vedankbhatnagar165@gmail.com"
                className="text-xs text-zinc-700 hover:text-amber-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/vedankbhr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-700 hover:text-amber-400 transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}