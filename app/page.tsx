"use client"

import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  MapPin,
  Linkedin,
  Calendar,
  Building2,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Rocket,
  Users,
  BarChart3,
  Send,
  ArrowDown,
  ArrowUpRight,
  Layers,
  Database,
  GitBranch,
} from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"

/* ───────────────────────────────────────────────────
   Stat counter – animates from 0 to target on scroll
   ─────────────────────────────────────────────────── */
function AnimatedStat({
  value,
  suffix = "",
  label,
  inView,
}: {
  value: number
  suffix?: string
  label: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div className="text-center">
      <p className="text-3xl md:text-5xl font-bold tracking-tight">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1 uppercase tracking-widest">{label}</p>
    </div>
  )
}

/* ───────────────────────────────────────────────────
   Main Portfolio
   ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  const sections = ["hero", "stats", "philosophy", "experience", "expertise", "portfolio", "education", "contact"]

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)

    const newVisibility: Record<string, boolean> = {}
    let current = "hero"

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        newVisibility[id] = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3) {
          current = id
        }
      }
    })

    setActiveSection(current)
    setIsVisible((prev) => {
      const changed = sections.some((s) => prev[s] !== newVisibility[s])
      return changed ? newVisibility : prev
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Inquiry — Let's Connect")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.open(`mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  const vis = (id: string) =>
    isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"

  /* ─── Render ─── */
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* ── Sticky side nav (desktop) ── */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            aria-label={s}
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${activeSection === s
                ? "bg-primary scale-150"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
          />
        ))}
      </nav>

      <ThemeToggle />

      {/* ═══════════════════════════════════
          HERO
         ═══════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div
          className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        />

        <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${vis("hero")}`}>
          <Badge
            variant="secondary"
            className="mb-6 text-xs tracking-widest uppercase font-medium px-4 py-1.5 border border-border/60"
          >
            Founder&apos;s Office · AI Products · Growth
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-6">
            <span className="block">Vedank</span>
            <span className="block bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
              Bhatnagar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto text-balance">
            I turn founder-level ambiguity into shipped products, validated roadmaps, and real revenue.
          </p>

          <p className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
            2+ years building AI products at early-stage startups — from zero-to-one MVPs to enterprise-grade annotation platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:vedankbhatnagar165@gmail.com?subject=Let's Collaborate">
                <Mail className="h-4 w-4" />
                Let&apos;s Collaborate
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/vedankbhr" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAR
         ═══════════════════════════════════ */}
      <section
        id="stats"
        className={`py-16 px-4 border-y border-border/40 transition-all duration-700 ease-out ${vis("stats")}`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={2} suffix="+" label="Years in AI Startups" inView={!!isVisible.stats} />
          <AnimatedStat value={500} suffix="K+" label="Data Points Processed" inView={!!isVisible.stats} />
          <AnimatedStat value={87} suffix="%" label="Gross Margin Modeled" inView={!!isVisible.stats} />
          <AnimatedStat value={30} suffix="%" label="Throughput Increase" inView={!!isVisible.stats} />
        </div>
      </section>

      {/* ═══════════════════════════════════
          PHILOSOPHY
         ═══════════════════════════════════ */}
      <section
        id="philosophy"
        className={`py-20 md:py-28 px-4 transition-all duration-700 ease-out ${vis("philosophy")}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">Philosophy</p>
          <blockquote className="text-2xl md:text-4xl font-light leading-snug text-foreground/90 mb-8 text-balance">
            "Navigate complexity with clarity. Turn AI possibilities into business outcomes."
          </blockquote>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            High-context thinking — understanding not just <em>what</em> needs to be done, but <em>why</em> it matters
            and how it connects to the bigger picture. Strategic vision paired with hands-on execution.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EXPERIENCE
         ═══════════════════════════════════ */}
      <section
        id="experience"
        className={`py-20 md:py-28 px-4 transition-all duration-700 ease-out ${vis("experience")}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Career</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Professional Journey</h2>
          </div>

          <div className="space-y-6">
            {/* ── Helium16 ── */}
            <Card className="group border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-5 md:p-8 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl leading-tight">
                        Founder&apos;s Office — AI & Strategy
                      </CardTitle>
                      <CardDescription className="text-base mt-1">Helium16 · Gurgaon</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="shrink-0 self-start text-xs">
                    <Calendar className="mr-1 h-3 w-3" /> Sep 2025 — Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-5">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Spearheading the pivot to HeliumLabs — a unified, AI-assisted data annotation platform across text,
                  audio, and vision modalities. Own the product roadmap end-to-end and lead Pre-Seed fundraising.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Target className="h-3.5 w-3.5" /> Product & Fundraising
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/75">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Architected investor pitch deck; led Pre-Seed fundraising conversations
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Modeled unit economics showing 87 % gross margins at scale
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Designed PLG freemium funnel targeting academic labs & AI startups
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Secured early enterprise proof-of-concept partnerships
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Layers className="h-3.5 w-3.5" /> Cross-Functional Leadership
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/75">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Bridged engineering ↔ business to accelerate MVP launch
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Established data-compliance standards for enterprise deals
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Managed multi-modal annotation product roadmap
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Built direct acquisition pipelines with outbound + content plays
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Product Strategy", "PLG", "Fundraising", "GTM Execution"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ── Deccan AI ── */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-5 md:p-8 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-accent/10 shrink-0 mt-0.5">
                      <Brain className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl leading-tight">Growth Manager</CardTitle>
                      <CardDescription className="text-base mt-1">Deccan AI · Hyderabad</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0 self-start text-xs">
                    <Calendar className="mr-1 h-3 w-3" /> Mar 2024 — Apr 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-5">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Orchestrated cross-functional AI product development across RLHF, Red Teaming, and core
                  operations — translating ambiguous founder objectives into structured requirements and
                  engineering deliverables.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-3.5 w-3.5" /> Impact
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/75">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        30 % increase in candidate-review throughput
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        25 % reduction in leadership decision turnaround
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        500 K+ data points processed via automated pipelines
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Delivered Golden Datasets accelerating enterprise PMF
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Database className="h-3.5 w-3.5" /> Scope
                    </h4>
                    <ul className="space-y-2 text-sm text-foreground/75">
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Architected automated eligibility & routing pipelines
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Built internal evaluation dashboards for AI metrics
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Managed data packaging for RAG implementations
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">›</span>
                        Steered zero-to-one product incubation initiatives
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["RLHF", "Token Economics", "Data Pipelines", "Product Incubation"].map((t) => (
                    <Badge key={t} variant="outline" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ── ConvertIAS ── */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-5 md:p-8 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-secondary/10 shrink-0 mt-0.5">
                      <Building2 className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl leading-tight">Operations Associate</CardTitle>
                      <CardDescription className="text-base mt-1">ConvertIAS · Bengaluru</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="shrink-0 self-start text-xs">
                    <Calendar className="mr-1 h-3 w-3" /> Jun 2023 — Feb 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-5">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Foundation-building role — developed expertise in operational excellence, cross-departmental
                  collaboration, and data-driven decision-making. Streamlined workflows and implemented best
                  practices that measurably improved organizational productivity.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Operations", "Process Optimization", "Cross-functional Coordination", "Data Management"].map(
                    (t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">
                        {t}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EXPERTISE
         ═══════════════════════════════════ */}
      <section
        id="expertise"
        className={`py-20 md:py-28 px-4 border-y border-border/40 transition-all duration-700 ease-out ${vis("expertise")}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Skills</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Core Expertise</h2>
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "AI & Technology",
                items: ["RLHF & Red Teaming", "Agentic AI Systems", "LLM Evaluation & Fine-tuning", "Data Annotation Pipelines"],
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Growth & Strategy",
                items: ["GTM Strategy & PLG", "Market Research & Sizing", "Investor Pitch Architecture", "Unit Economics Modeling"],
              },
              {
                icon: <GitBranch className="h-6 w-6" />,
                title: "Operations & Product",
                items: ["Product Roadmapping", "Process Optimization", "Cross-functional Leadership", "Stakeholder Management"],
              },
            ].map((col) => (
              <div key={col.title} className="group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">{col.icon}</div>
                  <h3 className="text-lg font-semibold">{col.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "Product Management",
              "Agentic AI",
              "RLHF",
              "Large Language Models",
              "Token Economics",
              "GTM Strategy",
              "Process Optimization",
              "Market Research",
              "Prompt Engineering",
              "Fundraising",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs py-1.5 px-3 font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PORTFOLIO / PROJECTS
         ═══════════════════════════════════ */}
      <section
        id="portfolio"
        className={`py-20 md:py-28 px-4 transition-all duration-700 ease-out ${vis("portfolio")}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Work</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* HeliumLabs */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-5 md:p-8 pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">HeliumLabs</CardTitle>
                    <CardDescription className="text-sm">AI Annotation Platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-4 flex-1 flex flex-col">
                <p className="text-sm text-foreground/75 mb-4 leading-relaxed flex-1">
                  Unified data-preparation infrastructure for AI builders — supporting text, audio, and vision
                  annotation with AI-assisted tooling. Designed the product roadmap, PLG model, and investor
                  narrative from scratch.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Product Roadmap", "PLG", "Multi-modal AI", "Pre-Seed"].map((t) => (
                    <Badge key={t} variant="outline" className="text-[11px] font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Agent */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-5 md:p-8 pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Brain className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Assistant Agent</CardTitle>
                    <CardDescription className="text-sm">Conversational AI</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5 md:p-8 pt-4 flex-1 flex flex-col">
                <p className="text-sm text-foreground/75 mb-4 leading-relaxed flex-1">
                  Custom AI agent with advanced conversational capabilities, demonstrating NLP expertise
                  and user-experience design for interactive, real-time dialogue systems.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["NLP", "Interactive UX", "Real-time", "Conversational AI"].map((t) => (
                    <Badge key={t} variant="outline" className="text-[11px] font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/projects">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EDUCATION
         ═══════════════════════════════════ */}
      <section
        id="education"
        className={`py-20 md:py-28 px-4 border-y border-border/40 transition-all duration-700 ease-out ${vis("education")}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Education</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Academic Foundation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5 md:p-8">
                <Badge variant="outline" className="mb-4 text-xs">
                  Aug 2025 — Present
                </Badge>
                <h3 className="text-xl font-semibold mb-1">PGP Rise — General Management</h3>
                <p className="text-sm text-muted-foreground mb-4">Masters&apos; Union, Gurgaon</p>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Advanced business strategy, leadership, and technology innovation with emphasis on practical
                  application in high-growth environments. Integrating academic frameworks with real-world AI
                  business challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5 md:p-8">
                <Badge variant="outline" className="mb-4 text-xs">
                  Aug 2020 — May 2024
                </Badge>
                <h3 className="text-xl font-semibold mb-1">B.A. Triple Major</h3>
                <p className="text-sm text-muted-foreground mb-4">Christ University, Bengaluru</p>
                <p className="text-sm text-foreground/75 leading-relaxed mb-3">
                  Journalism, Psychology, and English Literature — an interdisciplinary foundation that informs
                  user research, communication strategy, and product thinking.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Research Methodology", "Human Behavior", "Critical Analysis", "Storytelling"].map((t) => (
                    <Badge key={t} variant="outline" className="text-[11px] font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CONTACT
         ═══════════════════════════════════ */}
      <section
        id="contact"
        className={`py-20 md:py-28 px-4 transition-all duration-700 ease-out ${vis("contact")}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Open to product roles, AI collaborations, and interesting conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-4 w-4" />,
                  label: "Email",
                  value: "vedankbhatnagar165@gmail.com",
                  href: "mailto:vedankbhatnagar165@gmail.com",
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/vedankbhr",
                  href: "https://www.linkedin.com/in/vedankbhr",
                },
                {
                  icon: <MapPin className="h-4 w-4" />,
                  label: "Location",
                  value: "Gurugram, Haryana",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Tell me about your project or opportunity…"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4 border-t border-border/40">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vedank Bhatnagar
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:vedankbhatnagar165@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vedankbhr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}