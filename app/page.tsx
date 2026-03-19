"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  Linkedin,
  ArrowRight,
  MapPin,
  Terminal,
  Cpu,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Sparkles,
  Bot,
  MessageSquare
} from "lucide-react"
import { useState } from "react"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const EXPERIENCE = [
  {
    role: "Founder's Office — AI & Strategy",
    company: "Helium16",
    location: "Gurgaon",
    date: "Sep 2025 — Present",
    bullets: [
      "Spearheading the development of a unified, AI-assisted data annotation platform across text, audio, and vision modalities.",
      "Architected investor pitch and modeled unit economics demonstrating 87% gross margins and instant server profitability.",
      "Designed and executed a Product-Led Growth (PLG) freemium model, building direct acquisition pipelines targeting academic labs and AI startups.",
      "Bridged engineering and business teams to accelerate MVP launch and secure early enterprise PoC partnerships."
    ],
    skills: ["Product Strategy", "PLG", "Fundraising", "GTM"]
  },
  {
    role: "Growth Manager",
    company: "Deccan AI",
    location: "Hyderabad",
    date: "Mar 2024 — Apr 2025",
    bullets: [
      "Orchestrated cross-functional AI product development across RLHF, Red Teaming, and core operations.",
      "Developed and validated 'Golden Datasets' for RLHF/Agentic workflows, establishing continuous evaluation frameworks that accelerated enterprise PMF.",
      "Architected automated routing pipelines processing 500K+ data points, increasing throughput by 30%.",
      "Designed internal evaluation dashboards tracking latency and token economics, reducing leadership decision turnaround by 25%."
    ],
    skills: ["RLHF", "Data Pipelines", "Product Incubation", "Dashboards"]
  },
  {
    role: "Operations Associate",
    company: "ConvertIAS",
    location: "Bengaluru",
    date: "Jun 2023 — Feb 2024",
    bullets: [
      "Streamlined cross-departmental operational workflows, leading to measurably enhanced organizational productivity.",
      "Managed data reporting pipelines to support strategic high-level decision-making processes.",
      "Facilitated effective communication between different departments, promoting collaboration and best practices."
    ],
    skills: ["Operations", "Process Optimization", "Data Management"]
  }
]

/* ─────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Inquiry")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30 scroll-smooth">
      <ThemeToggle />

      {/* ═══════════════════════════════════════════
          NAVBAR
         ═══════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">VB.</span>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════ */}
      <section id="about" className="pt-32 md:pt-48 pb-16 px-6 relative overflow-hidden">
        {/* Modern grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Product Operator & AI Strategist
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              Shipping <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                AI Products
              </span>
              <br className="hidden md:block" /> from Zero to One.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              I am Vedank Bhatnagar. I translate founder-level ambiguity into prioritized roadmaps, scalable MVPs, and clear success metrics. I bridge the gap between AI engineering and commercial reality.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full h-12 px-8 bg-foreground text-background hover:bg-foreground/90 shadow-sm gap-2" asChild>
              <a href="#experience">View My Work <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 gap-2 bg-background/50 backdrop-blur-sm" asChild>
              <a href="https://linkedin.com/in/vedankbhr" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" /> Connect
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BENTO GRID (Stats & Skills)
         ═══════════════════════════════════════════ */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

            {/* Stat Card 1 */}
            <FadeIn delay={0.1} className="md:col-span-1 row-span-1 bg-muted/40 rounded-3xl p-8 border border-border/50 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Experience</p>
              <p className="text-5xl font-bold tracking-tight text-foreground">2+ Yrs</p>
              <p className="text-sm text-muted-foreground mt-2">Scaling AI Startups</p>
            </FadeIn>

            {/* Core Skills Box */}
            <FadeIn delay={0.2} className="md:col-span-2 row-span-1 bg-muted/40 rounded-3xl p-8 border border-border/50 flex flex-col justify-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Large Language Models", "RLHF & Red Teaming", "Agentic Workflows", "Product Strategy", "PLG Design", "Token Economics", "Data Pipelines"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-background border border-border/50 rounded-full text-sm font-medium text-foreground/80 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Stat Card 2 */}
            <FadeIn delay={0.3} className="md:col-span-2 row-span-1 bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <p className="text-sm font-semibold text-blue-100 uppercase tracking-wider mb-2 relative z-10">Data Processing</p>
              <div className="flex items-end gap-3 relative z-10">
                <p className="text-5xl font-bold tracking-tight">500K+</p>
                <p className="text-lg font-medium text-blue-100 mb-1">Data Points</p>
              </div>
              <p className="text-sm text-blue-50 mt-2 max-w-md relative z-10">Architected automated routing pipelines that increased candidate-review throughput by 30%.</p>
            </FadeIn>

            {/* Stat Card 3 */}
            <FadeIn delay={0.4} className="md:col-span-1 row-span-1 bg-muted/40 rounded-3xl p-8 border border-border/50 flex flex-col justify-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Financials
              </p>
              <p className="text-5xl font-bold tracking-tight text-foreground">87%</p>
              <p className="text-sm text-muted-foreground mt-2">Gross Margin Modeled</p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPERIENCE (TIMELINE)
         ═══════════════════════════════════════════ */}
      <section id="experience" className="py-24 px-6 border-t border-border/40 mt-12 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 flex items-center gap-4">
              <Briefcase className="w-8 h-8 text-blue-600" /> Professional Journey
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-0">

                  {/* Desktop Timeline Line */}
                  <div className="hidden md:block absolute left-[28%] top-0 bottom-0 w-px bg-border/80" />

                  {/* Mobile Timeline Line */}
                  <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-border/80" />

                  <div className="md:grid md:grid-cols-[28%_1fr] gap-8">
                    {/* Meta Data */}
                    <div className="mb-4 md:mb-0 relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[37px] md:left-[calc(100%-4px)] top-2 w-2 h-2 rounded-full bg-blue-600 ring-4 ring-background z-10" />

                      <p className="text-sm font-bold text-foreground mb-1">{exp.date}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">{exp.company}</p>

                      <ul className="space-y-2 mb-6">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-blue-500 mt-1.5 shrink-0 text-[10px]">■</span> {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(s => (
                          <span key={s} className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-foreground/70">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROJECTS SHOWCASE
         ═══════════════════════════════════════════ */}
      <section id="projects" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
                  <Terminal className="w-8 h-8 text-violet-600" /> Featured Work
                </h2>
                <p className="text-muted-foreground max-w-lg">A selection of AI agents and platforms I've built and engineered.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Meet Lucy */}
            <FadeIn delay={0.1}>
              <div className="group rounded-3xl bg-muted/30 border border-border/50 overflow-hidden hover:border-violet-500/30 transition-colors h-full flex flex-col">
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 border-b border-border/50 p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
                  <Bot className="w-16 h-16 text-violet-500/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1">Meet Lucy</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">Corporate Research & Pitch Assistant</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Lucy quickly turns a company website and a POC’s LinkedIn profile into clear reports, stakeholder insights, and pitch ideas. Built for fast-moving corporate teams to eliminate manual research.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full">Conversational AI</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full">Web Connected</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Meet Jonathan */}
            <FadeIn delay={0.2}>
              <div className="group rounded-3xl bg-muted/30 border border-border/50 overflow-hidden hover:border-blue-500/30 transition-colors h-full flex flex-col">
                <div className="h-48 bg-zinc-100 dark:bg-zinc-900 border-b border-border/50 p-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
                  <MessageSquare className="w-16 h-16 text-blue-500/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1">Meet Jonathan</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">Interactive HR Coach</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    Jonathan is an AI HR partner that guides managers through structured, conversational feedback collection using the SBI method. He asks for each component step-by-step and drafts polished performance reviews.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full">SBI Framework</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full">Agentic Workflow</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Dedicated Projects Page Link */}
          <FadeIn delay={0.3} className="text-center">
            <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/projects">View Interactive AI Demos <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </FadeIn>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EDUCATION & INTERNSHIPS (Minimal List)
         ═══════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-border/40 bg-muted/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" /> Education
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold">PGP Rise General Management</p>
                  <p className="text-sm text-muted-foreground">Masters' Union &middot; Gurgaon</p>
                  <p className="text-xs text-muted-foreground mt-1">Aug 2025 — Present</p>
                </div>
                <div>
                  <p className="text-sm font-bold">B.A. Triple Major</p>
                  <p className="text-sm text-muted-foreground">Christ University &middot; Bengaluru</p>
                  <p className="text-xs text-muted-foreground mt-1">2020 — 2024</p>
                  <p className="text-xs text-foreground/60 mt-2 bg-background inline-block px-2 py-1 rounded border border-border/50">Journalism, Psychology, English</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-violet-600" /> Internships
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold">Content Writer</p>
                  <p className="text-sm text-muted-foreground">Rajasthan Patrika &middot; Udaipur</p>
                  <p className="text-xs text-muted-foreground mt-1">Jun 2022 — Jul 2022</p>
                </div>
                <div>
                  <p className="text-sm font-bold">Content Writer</p>
                  <p className="text-sm text-muted-foreground">Earthy Objects &middot; Remote</p>
                  <p className="text-xs text-muted-foreground mt-1">Jun 2021 — Aug 2021</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT SECTION
         ═══════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-muted/40 border border-border/50 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Ready to build?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                I am currently open to new product roles, AI collaborations, and advising on zero-to-one builds.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="mailto:vedankbhatnagar165@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors">
                  <Mail className="w-4 h-4" /> vedankbhatnagar165@gmail.com
                </a>
                <a href="https://linkedin.com/in/vedankbhr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border/50 font-medium rounded-full hover:bg-muted transition-colors shadow-sm">
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
              </div>

              {/* Minimal Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border/50 h-12 rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border/50 h-12 rounded-xl"
                  />
                </div>
                <Textarea
                  placeholder="How can I help you?"
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border/50 rounded-xl resize-none"
                />
                <Button type="submit" className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
         ═══════════════════════════════════════════ */}
      <footer className="py-8 text-center border-t border-border/40 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Vedank Bhatnagar. Built with Next.js.</p>
      </footer>
    </div>
  )
}