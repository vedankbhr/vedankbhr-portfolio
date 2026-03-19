"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, MessageSquare, Zap, Globe, Sparkles } from "lucide-react"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">

      {/* ═══════════════════════════════════
         NAVIGATION
         ═══════════════════════════════════ */}
      <nav className="fixed top-6 left-6 z-50">
        <Button variant="outline" size="sm" asChild className="backdrop-blur-md bg-background/50 border-border/50 shadow-sm hover:shadow-md transition-all rounded-full px-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </nav>

      {/* ═══════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════ */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden px-4">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/[0.05] blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/[0.05] blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-6 text-xs tracking-widest uppercase font-medium px-4 py-1.5 border border-border/60 bg-background/50 backdrop-blur-md">
            Interactive Demos
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent pb-2">
            AI Agent Projects
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Explore my latest interactive agents designed to automate corporate research, streamline HR workflows, and push the boundaries of conversational AI.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
         PROJECTS GRID
         ═══════════════════════════════════ */}
      <section id="projects" className="py-16 md:py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">

            {/* ── PROJECT 1: Lucy ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <Card className="flex flex-col h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold tracking-tight mb-1">Meet Lucy</CardTitle>
                      <CardDescription className="text-sm font-medium">Corporate Research & Pitch Assistant</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><MessageSquare className="mr-1.5 h-3 w-3" /> Conversational AI</Badge>
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><Zap className="mr-1.5 h-3 w-3" /> Real-time</Badge>
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><Globe className="mr-1.5 h-3 w-3" /> Web Integration</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                    Lucy quickly turns a company website and a POC’s LinkedIn profile into clear reports, stakeholder insights, and pitch ideas. Built for fast-moving corporate teams, she eliminates manual research and equips you with the context you need to make smarter, more effective outreach.
                  </p>

                  {/* Responsive Iframe Container */}
                  <div className="w-full rounded-xl overflow-hidden border border-border/50 bg-muted/10 mb-8 shadow-inner">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[400px] sm:h-[500px] border-0"
                      title="Lucy AI Agent"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Buttons pinned to bottom using mt-auto */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button variant="default" className="flex-1 shadow-md hover:shadow-primary/20 transition-all">
                      <MessageSquare className="mr-2 h-4 w-4" /> Try AI Agent
                    </Button>
                    <Button variant="outline" asChild className="flex-1 bg-background/50 backdrop-blur-sm hover:bg-muted">
                      <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat" target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Open Full View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── PROJECT 2: Jonathan ── */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
              <Card className="flex flex-col h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent-foreground shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold tracking-tight mb-1">Meet Jonathan</CardTitle>
                      <CardDescription className="text-sm font-medium">Interactive HR Coach</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><MessageSquare className="mr-1.5 h-3 w-3" /> SBI Framework</Badge>
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><Zap className="mr-1.5 h-3 w-3" /> Fast Processing</Badge>
                    <Badge variant="secondary" className="text-xs font-medium bg-background/80"><Globe className="mr-1.5 h-3 w-3" /> Web Integration</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                    Jonathan is an AI HR partner that guides managers through structured, conversational feedback collection using the SBI (Situation–Behavior–Impact) method. He asks for each component step-by-step and turns notes into polished performance reviews and personalized growth charts.
                  </p>

                  {/* Responsive Iframe Container */}
                  <div className="w-full rounded-xl overflow-hidden border border-border/50 bg-muted/10 mb-8 shadow-inner">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[400px] sm:h-[500px] border-0"
                      title="Jonathan AI Agent Tool"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Buttons pinned to bottom using mt-auto */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button variant="default" className="flex-1 shadow-md hover:shadow-accent/20 transition-all">
                      <MessageSquare className="mr-2 h-4 w-4" /> Try AI Agent
                    </Button>
                    <Button variant="outline" asChild className="flex-1 bg-background/50 backdrop-blur-sm hover:bg-muted">
                      <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat" target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Open Full View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>

          {/* ── PROJECT 3: Coming Soon Placeholder ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
            <Card className="mt-8 md:mt-12 group hover:shadow-xl transition-all duration-500 bg-background/30 backdrop-blur-sm border-border/40 border-dashed overflow-hidden">
              <CardContent className="p-10 md:p-16 text-center">
                <div className="p-4 rounded-full bg-primary/5 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  <Sparkles className="h-8 w-8 text-primary/60" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">More Projects in the Pipeline</h3>
                <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed mb-8">
                  I am constantly prototyping new ideas, agentic workflows, and LLM integrations. Stay tuned for deeper technical builds and industry-specific tools.
                </p>
                <Button variant="outline" size="lg" disabled className="bg-background/50 cursor-not-allowed">
                  Deploying Soon...
                </Button>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════
         FOOTER
         ═══════════════════════════════════ */}
      <footer className="py-10 px-4 border-t border-border/40 mt-12 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
          <p className="text-sm font-medium text-foreground/80 mb-2">
            &copy; {new Date().getFullYear()} Vedank Bhatnagar. Crafted with precision and passion.
          </p>
          <p className="text-xs text-muted-foreground">
            Building the future, one AI solution at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}