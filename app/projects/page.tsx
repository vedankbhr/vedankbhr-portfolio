"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Bot, MessageSquare, Zap, Globe, Sparkles, ExternalLink, Scale, LayoutDashboard, Play } from "lucide-react"

/* ─────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

/* Facade Component to prevent iframe scroll lag */
function DemoEmbed({ src, title }: { src: string, title: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  if (isLoaded) {
    return (
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full border-0 animate-in fade-in duration-500"
        title={title}
        allow="microphone; camera"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    )
  }

  return (
    <div
      onClick={() => setIsLoaded(true)}
      className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10 group cursor-pointer hover:bg-muted/20 transition-colors"
    >
      <div className="w-16 h-16 rounded-full bg-background border border-border/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300 mb-4">
        <Play className="w-6 h-6 text-foreground ml-1" />
      </div>
      <p className="font-medium text-foreground">Load Interactive Demo</p>
      <p className="text-xs text-muted-foreground mt-2">Clicking will load the live application</p>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30 scroll-smooth">
      <ThemeToggle />

      {/* ═══════════════════════════════════════════
          NAVBAR
         ═══════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-blue-600 transition-colors">
            VB.
          </Link>
          <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </Button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════ */}
      <section className="pt-32 md:pt-48 pb-16 px-6 relative overflow-hidden">
        {/* Modern grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Interactive Demos & Platforms
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              AI Agent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Projects
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore my latest platforms and interactive agents designed to automate corporate research, streamline workflows, and push the boundaries of conversational AI.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROJECTS GRID
         ═══════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">

            {/* ── PROJECT 1: Coop AI (Featured Full Width) ── */}
            <FadeIn delay={0.1} className="col-span-1 xl:col-span-2 flex flex-col h-full bg-muted/30 border border-border/50 rounded-3xl hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 overflow-hidden group">
              <div className="p-8 pb-6 lg:px-12 lg:pt-12">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Scale className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight mb-1">Coop AI</h2>
                      <p className="text-sm font-medium text-muted-foreground">AI-Powered Business & Legal Tech Platform</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><LayoutDashboard className="h-3 w-3" /> Agentic Workspace</span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><Zap className="h-3 w-3" /> Deterministic Actions</span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><Globe className="h-3 w-3" /> Web App</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
                  A comprehensive AI platform designed to move beyond the traditional "chat bubble." Coop AI utilizes a split-screen architecture and deterministic workflow buttons to automate document analysis, flag liabilities, and streamline business operations with verifiable citations.
                </p>
              </div>

              <div className="px-8 pb-8 pt-0 lg:px-12 flex-1 flex flex-col">
                {/* App Window UI Wrapper */}
                <div className="w-full rounded-2xl overflow-hidden border border-border/50 bg-background mb-8 flex flex-col shadow-sm">
                  {/* Mac-style Window Header */}
                  <div className="h-10 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="flex-1 text-center flex justify-center items-center">
                      <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                        <Globe className="w-3 h-3" /> v0-ai-chat-business-platform.vercel.app
                      </span>
                    </div>
                  </div>
                  {/* The Facade Iframe */}
                  <div className="w-full h-[500px] md:h-[650px] relative bg-background">
                    <DemoEmbed
                      src="https://v0-ai-chat-business-platform-omega.vercel.app/"
                      title="Coop AI Platform"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto lg:w-1/2">
                  <Button className="flex-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <a href="https://v0-ai-chat-business-platform-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <LayoutDashboard className="mr-2 h-4 w-4" /> Open Web App
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* ── PROJECT 2: Lucy ── */}
            <FadeIn delay={0.2} className="flex flex-col h-full bg-muted/30 border border-border/50 rounded-3xl hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-500 overflow-hidden group">
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight mb-1">Meet Lucy</h2>
                      <p className="text-sm font-medium text-muted-foreground">Corporate Research & Pitch Assistant</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><MessageSquare className="h-3 w-3" /> Conversational</span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><Globe className="h-3 w-3" /> Web Connected</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lucy quickly turns a company website and a POC’s LinkedIn profile into clear reports, stakeholder insights, and pitch ideas. Built for fast-moving corporate teams, she eliminates manual research and equips you with the context you need to make smarter outreach.
                </p>
              </div>

              <div className="px-8 pb-8 pt-0 flex-1 flex flex-col">
                {/* App Window UI Wrapper */}
                <div className="w-full rounded-2xl overflow-hidden border border-border/50 bg-background mb-8 flex flex-col shadow-sm">
                  {/* Mac-style Window Header */}
                  <div className="h-10 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="flex-1 text-center flex justify-center items-center">
                      <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                        <Globe className="w-3 h-3" /> app.relevanceai.com
                      </span>
                    </div>
                  </div>
                  {/* The Facade Iframe */}
                  <div className="w-full h-[400px] sm:h-[450px] relative">
                    <DemoEmbed
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%238B5CF6&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      title="Lucy AI Agent"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button className="flex-1 rounded-full bg-violet-600 hover:bg-violet-700 text-white">
                    <MessageSquare className="mr-2 h-4 w-4" /> Chat with Lucy
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full bg-background" asChild>
                    <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* ── PROJECT 3: Jonathan ── */}
            <FadeIn delay={0.3} className="flex flex-col h-full bg-muted/30 border border-border/50 rounded-3xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden group">
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight mb-1">Meet Jonathan</h2>
                      <p className="text-sm font-medium text-muted-foreground">Interactive HR Coach</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><MessageSquare className="h-3 w-3" /> SBI Framework</span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-background border border-border/50 rounded-full flex items-center gap-1.5"><Zap className="h-3 w-3" /> Feedback Loop</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jonathan is an AI HR partner that guides managers through structured, conversational feedback collection using the SBI (Situation–Behavior–Impact) method. He asks for each component step-by-step and turns notes into polished performance reviews.
                </p>
              </div>

              <div className="px-8 pb-8 pt-0 flex-1 flex flex-col">
                {/* App Window UI Wrapper */}
                <div className="w-full rounded-2xl overflow-hidden border border-border/50 bg-background mb-8 flex flex-col shadow-sm">
                  {/* Mac-style Window Header */}
                  <div className="h-10 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="flex-1 text-center flex justify-center items-center">
                      <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                        <Globe className="w-3 h-3" /> app.relevanceai.com
                      </span>
                    </div>
                  </div>
                  {/* The Facade Iframe */}
                  <div className="w-full h-[400px] sm:h-[450px] relative">
                    <DemoEmbed
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%233B82F6&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      title="Jonathan AI Agent Tool"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button className="flex-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="mr-2 h-4 w-4" /> Chat with Jonathan
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-full bg-background" asChild>
                    <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* ── PROJECT 4: Coming Soon Placeholder ── */}
          <FadeIn delay={0.4}>
            <div className="mt-8 md:mt-12 bg-muted/20 border border-border/40 border-dashed rounded-3xl overflow-hidden">
              <div className="p-10 md:p-16 text-center">
                <div className="p-4 rounded-full bg-blue-500/10 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">More Projects in the Pipeline</h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                  I am constantly prototyping new ideas, agentic workflows, and LLM integrations. Stay tuned for deeper technical builds and industry-specific tools.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
         ═══════════════════════════════════════════ */}
      <footer className="py-8 text-center border-t border-border/40 text-sm text-muted-foreground mt-12">
        <p>&copy; {new Date().getFullYear()} Vedank Bhatnagar.</p>
      </footer>
    </div>
  )
}