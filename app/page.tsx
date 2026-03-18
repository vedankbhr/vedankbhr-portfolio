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
  Phone,
  Target,
  TrendingUp,
  Brain,
  Rocket,
  Send,
  ArrowDown,
  ArrowUpRight,
  Layers,
  GraduationCap,
  PenTool,
  Scale,
  CheckCircle2,
  Sparkles,
  Database,
  LineChart
} from "lucide-react"
import { useState, useEffect } from "react"

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

function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="mb-14">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Inquiry — Let's Connect")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.open(`mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">
      <ThemeToggle />

      {/* ═══════════════════════════════════
         HERO
         ═══════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Restored and styled Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="text-xs tracking-widest uppercase font-medium px-4 py-1.5 border border-border/60 bg-background/50 backdrop-blur-md">
              Founder&apos;s Office · AI Products · Growth
            </Badge>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-6">
            <span className="block text-foreground">Vedank</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent pb-2">
              Bhatnagar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 max-w-3xl mx-auto text-balance">
            I translate founder-level ambiguity into shipped MVPs, validated roadmaps, and scalable revenue.
          </p>

          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Product operator with 2+ years scaling AI startups. Delivered RLHF data products that increased throughput by 30% and architected zero-to-one platforms for enterprise buyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" /> Let&apos;s Collaborate
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8 bg-background/50 backdrop-blur-sm" asChild>
              <a href="https://www.linkedin.com/in/vedankbhr" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="mt-20"
          >
            <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
         STATS BAR
         ═══════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        id="stats" className="py-16 px-4 border-y border-border/40 bg-gradient-to-b from-muted/10 to-transparent"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat value={2} suffix="+" label="Years in AI Startups" />
          <AnimatedStat value={500} suffix="K+" label="Data Points Processed" />
          <AnimatedStat value={87} suffix="%" label="Gross Margin Modeled" />
          <AnimatedStat value={30} suffix="%" label="Throughput Increase" />
        </div>
      </motion.section>

      {/* ═══════════════════════════════════
         EXPERIENCE
         ═══════════════════════════════════ */}
      <section id="experience" className="py-20 md:py-32 px-4 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader subtitle="Career" title="Employment History" />

          <div className="space-y-8">
            {/* ── Helium16 ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <Card className="group border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-background/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/80" />
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold tracking-tight mb-1">Founder&apos;s Office — AI & Strategy</CardTitle>
                        <CardDescription className="text-base font-medium flex items-center gap-2">
                          Helium16 <span className="w-1 h-1 rounded-full bg-muted-foreground/50" /> Gurgaon
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 font-medium px-3 py-1"><Calendar className="mr-2 h-3.5 w-3.5 text-muted-foreground" /> Sept 2025 — Present</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed mb-6 list-disc ml-5 marker:text-primary">
                    <li><strong>Product Strategy:</strong> Spearheaded the pivot to HeliumLabs, managing the product roadmap for a unified, AI-assisted data annotation platform across text, audio, and vision.</li>
                    <li><strong>Fundraising & Operations:</strong> Led Pre-Seed fundraising efforts, architecting the investor pitch and modeling unit economics to demonstrate 87% gross margins and instant server profitability.</li>
                    <li><strong>Go-To-Market (GTM):</strong> Designed and executed a Product-Led Growth (PLG) freemium model, building direct acquisition pipelines targeting top-tier academic labs and AI startups.</li>
                    <li><strong>Cross-Functional Leadership:</strong> Bridged engineering and business teams to accelerate MVP launch, establish data compliance standards, and secure early enterprise proof-of-concept partnerships.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {["Product Strategy", "PLG", "Fundraising", "GTM Execution"].map((t) => (
                      <Badge key={t} variant="outline" className="text-xs bg-background/50">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Deccan AI ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
              <Card className="group border border-border/50 hover:border-accent/30 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 bg-background/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/80" />
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent-foreground shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold tracking-tight mb-1">Growth Manager</CardTitle>
                        <CardDescription className="text-base font-medium flex items-center gap-2">
                          Deccan AI <span className="w-1 h-1 rounded-full bg-muted-foreground/50" /> Hyderabad
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 font-medium px-3 py-1"><Calendar className="mr-2 h-3.5 w-3.5 text-muted-foreground" /> Mar 2024 — Apr 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    Orchestrated cross-functional AI product development across RLHF, Red Teaming, and core business operations, translating ambiguous founder-led objectives into structured product requirements and engineering deliverables.
                  </p>

                  <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed mb-6 list-disc ml-5 marker:text-accent-foreground">
                    <li>Developed and validated "Golden Datasets" for RLHF and Agentic workflows, establishing continuous evaluation frameworks that improved model output reliability and accelerated enterprise product-market fit.</li>
                    <li>Architected automated eligibility and routing pipeline using structured data extraction, collaborating with engineering to process 500,000+ data points, increasing throughput by 30% while reducing manual triage.</li>
                    <li>Designed internal evaluation dashboards to track core AI product metrics (latency, token economics) reducing leadership decision turnaround time by 25% on model iteration cycles.</li>
                    <li>Bridged commercial strategy and AI engineering, managing data packaging for RAG implementations and defining strict execution guardrails to ensure high-fidelity user experiences.</li>
                    <li>Steered highly autonomous, zero-to-one product incubation initiatives, managing model non-determinism and designing edge-case handling for production-grade AI deployments.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {["RLHF", "Data Pipelines", "Product Incubation", "RAG"].map((t) => (
                      <Badge key={t} variant="outline" className="text-xs bg-background/50">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── ConvertIAS ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
              <Card className="group border border-border/50 hover:border-secondary-foreground/30 shadow-sm hover:shadow-xl transition-all duration-500 bg-background/50 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary-foreground/60" />
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-secondary shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold tracking-tight mb-1">Operations Associate</CardTitle>
                        <CardDescription className="text-base font-medium flex items-center gap-2">
                          ConvertIAS <span className="w-1 h-1 rounded-full bg-muted-foreground/50" /> Bengaluru
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 font-medium px-3 py-1"><Calendar className="mr-2 h-3.5 w-3.5 text-muted-foreground" /> Jun 2023 — Feb 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed list-disc ml-5 marker:text-secondary-foreground">
                    <li>Facilitated effective communication between different departments, promoting collaboration.</li>
                    <li>Assisted in streamlining operational workflows, leading to enhanced productivity.</li>
                    <li>Engaged in data management and reporting tasks to support decision-making processes.</li>
                    <li>Contributed to the implementation of best practices in operations management.</li>
                    <li>Supported various projects, demonstrating a commitment to achieving organisational goals.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
         INTERNSHIPS & EDUCATION
         ═══════════════════════════════════ */}
      <section id="education" className="py-20 md:py-32 px-4 bg-muted/10 border-y border-border/40">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Education */}
          <div>
            <SectionHeader subtitle="Academics" title="Education" />
            <div className="space-y-5">
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold">PGP Rise General Management</h3>
                        <Badge variant="secondary" className="text-[10px] ml-2 shrink-0">Aug 2025 — Present</Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground/70">Masters&apos; Union · Gurgaon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold">B.A. Triple Major</h3>
                        <Badge variant="secondary" className="text-[10px] ml-2 shrink-0">2020 — 2024</Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground/70 mb-2">Christ University · Bengaluru</p>
                      <p className="text-xs text-muted-foreground">Journalism, Psychology, and English Literature</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Internships */}
          <div>
            <SectionHeader subtitle="Early Experience" title="Internships" />
            <div className="space-y-5">
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 mt-1">
                      <PenTool className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold">Content Writer</h3>
                        <Badge variant="outline" className="text-[10px] ml-2 shrink-0">Jun — Jul 2022</Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground/70">Rajasthan Patrika · Udaipur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 mt-1">
                      <PenTool className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold">Content Writer</h3>
                        <Badge variant="outline" className="text-[10px] ml-2 shrink-0">Jun — Aug 2021</Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground/70">Earthy Objects · Remote</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════
         PORTFOLIO / PROJECTS
         ═══════════════════════════════════ */}
      <section id="portfolio" className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader subtitle="Work" title="Featured Projects" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="group hover:shadow-xl transition-all duration-500 flex flex-col h-full bg-gradient-to-br from-background to-muted/30 border-primary/20 hover:border-primary/50 overflow-hidden">
                <CardHeader className="p-6 md:p-8 pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Brain className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">AI Assistant Agent</CardTitle>
                      <CardDescription className="text-sm font-medium mt-1">Conversational AI</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-4 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/80 mb-8 leading-relaxed flex-1">
                    Custom AI agent with advanced conversational capabilities, demonstrating NLP expertise and user-experience design for interactive, real-time dialogue systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["NLP", "Interactive UX", "Real-time", "Conversational AI"].map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-medium px-3 py-1 bg-background/80">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/projects">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
         SKILLS & EXPERTISE
         ═══════════════════════════════════ */}
      <section id="expertise" className="py-20 md:py-28 px-4 bg-primary/5 border-y border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader subtitle="Expertise" title="Core Capabilities" />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Token Economics",
              "Market Research",
              "Large Language Models (LLMs)",
              "Project Management",
              "Product Management",
              "Agentic AI",
              "Process Optimization",
              "GTM Strategy"
            ].map((skill) => (
              <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge variant="outline" className="text-sm py-2.5 px-5 font-medium bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-colors cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
         CONTACT
         ═══════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Open to product roles, AI collaborations, and interesting conversations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 p-6 md:p-0">
              {[
                { icon: <Mail className="h-5 w-5" />, label: "Email", value: "vedankbhatnagar165@gmail.com", href: "mailto:vedankbhatnagar165@gmail.com" },
                { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 7426019793", href: "tel:+917426019793" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/vedankbhr", href: "https://www.linkedin.com/in/vedankbhr" },
                { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Gurgaon, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5 group">
                  <div className="p-3.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="border border-border/50 shadow-xl shadow-primary/5 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input className="h-12 bg-muted/30 border-border/50 focus-visible:ring-primary/50" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input className="h-12 bg-muted/30 border-border/50 focus-visible:ring-primary/50" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  <Textarea className="min-h-[120px] bg-muted/30 border-border/50 focus-visible:ring-primary/50 resize-y" placeholder="Tell me about your project or opportunity…" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  <Button type="submit" size="lg" className="w-full h-12 gap-2 text-base font-medium shadow-md hover:shadow-primary/20 transition-all">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}