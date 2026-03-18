"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
  Target,
  TrendingUp,
  Brain,
  Rocket,
  Send,
  ArrowDown,
  ArrowUpRight,
  Layers,
  Database,
  GitBranch,
  Scale,
} from "lucide-react"
import { useState, useEffect } from "react"

/* ───────────────────────────────────────────────────
   Stat counter – optimized with useEffect
   ─────────────────────────────────────────────────── */
function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
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
  }, [value])

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
   Reusable Section Header
   ─────────────────────────────────────────────────── */
function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="mb-14">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}

/* ───────────────────────────────────────────────────
   Main Portfolio
   ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const sections = ["hero", "stats", "philosophy", "experience", "expertise", "portfolio", "education", "contact"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Inquiry — Let's Connect")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.open(`mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  /* ─── Render ─── */
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">
      <ThemeToggle />

      {/* ═══════════════════════════════════
         HERO
         ═══════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-6 text-xs tracking-widest uppercase font-medium px-4 py-1.5 border border-border/60">
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
              <a href="#contact">
                <Mail className="h-4 w-4" /> Let&apos;s Collaborate
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/vedankbhr" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
         STATS BAR
         ═══════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        id="stats" className="py-16 px-4 border-y border-border/40 bg-muted/10"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={2} suffix="+" label="Years in AI Startups" />
          <AnimatedStat value={500} suffix="K+" label="Data Points Processed" />
          <AnimatedStat value={87} suffix="%" label="Gross Margin Modeled" />
          <AnimatedStat value={30} suffix="%" label="Throughput Increase" />
        </div>
      </motion.section>

      {/* ═══════════════════════════════════
         PHILOSOPHY
         ═══════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
        id="philosophy" className="py-20 md:py-28 px-4"
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
      </motion.section>

      {/* ═══════════════════════════════════
         EXPERIENCE
         ═══════════════════════════════════ */}
      <section id="experience" className="py-20 md:py-28 px-4 bg-muted/10 border-y border-border/40">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="Career" title="Professional Journey" />

          <div className="space-y-6">
            {/* ── Helium16 ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="group border-l-4 border-l-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <CardHeader className="p-5 md:p-8 pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl leading-tight">Founder&apos;s Office — AI & Strategy</CardTitle>
                        <CardDescription className="text-base mt-1">Helium16 · Gurgaon</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 self-start text-xs"><Calendar className="mr-1 h-3 w-3" /> Sep 2025 — Present</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5 md:p-8 pt-5">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Spearheading the pivot to HeliumLabs — a unified, AI-assisted data annotation platform across text,
                    audio, and vision modalities. Own the product roadmap end-to-end and lead Pre-Seed fundraising.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product Strategy", "PLG", "Fundraising", "GTM Execution"].map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Deccan AI ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                    <Badge variant="outline" className="shrink-0 self-start text-xs"><Calendar className="mr-1 h-3 w-3" /> Mar 2024 — Apr 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-5 md:p-8 pt-5">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Orchestrated cross-functional AI product development across RLHF, Red Teaming, and core
                    operations — translating ambiguous founder objectives into structured requirements and engineering deliverables.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["RLHF", "Data Pipelines", "Product Incubation"].map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
         PORTFOLIO / PROJECTS
         ═══════════════════════════════════ */}
      <section id="portfolio" className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="Work" title="Featured Projects" />

          <div className="grid md:grid-cols-2 gap-6">

            {/* Coop AI */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-gradient-to-br from-background to-muted/20 border-primary/20">
                <CardHeader className="p-5 md:p-8 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Coop AI</CardTitle>
                      <CardDescription className="text-sm">Contract Lifecycle Copilot</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-5 md:p-8 pt-4 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/75 mb-4 leading-relaxed flex-1">
                    An intelligent CLM platform designed to accelerate legal negotiations. Features automated risk detection against custom legal playbooks and an AI negotiation copilot for live redlining.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["0-to-1 Build", "Generative AI", "PRD Architecture", "GTM Strategy"].map((t) => (
                      <Badge key={t} variant="outline" className="text-[11px] font-normal">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* HeliumLabs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
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
                    Unified data-preparation infrastructure for AI builders. Designed the product roadmap, PLG model, and investor narrative from scratch to support multi-modal data processing.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {["Product Roadmap", "PLG", "Multi-modal AI", "Pre-Seed"].map((t) => (
                      <Badge key={t} variant="outline" className="text-[11px] font-normal">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
         CONTACT
         ═══════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 px-4 bg-muted/10 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Open to product roles, AI collaborations, and interesting conversations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                { icon: <Mail className="h-4 w-4" />, label: "Email", value: "vedankbhatnagar165@gmail.com", href: "mailto:vedankbhatnagar165@gmail.com" },
                { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", value: "linkedin.com/in/vedankbhr", href: "https://www.linkedin.com/in/vedankbhr" },
                { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Gurugram, Haryana" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  <Textarea placeholder="Tell me about your project or opportunity…" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  <Button type="submit" className="w-full gap-2"><Send className="h-4 w-4" /> Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}