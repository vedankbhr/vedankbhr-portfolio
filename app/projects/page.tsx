"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, MessageSquare, Zap, Globe, Sparkles, ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth">

      {/* ═══════════════════════════════════
         NAVIGATION
         ═══════════════════════════════════ */}
      <nav className="fixed top-6 left-6 z-50">
        <Button variant="outline" size="sm" asChild className="backdrop-blur-xl bg-background/70 border-border/50 shadow-sm hover:shadow-md transition-all rounded-full px-4 h-10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </Button>
      </nav>

      {/* ═══════════════════════════════════
         HERO SECTION (Redesigned for better spacing & contrast)
         ═══════════════════════════════════ */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20 flex items-center justify-center overflow-hidden border-b border-border/40 bg-muted/10">
        {/* Subtle Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4"
        >
          <Badge className="mb-6 text-xs tracking-widest uppercase font-semibold px-4 py-1.5 border border-primary/20 bg-primary/10 text-primary hover:bg-primary/15 transition-colors">
            Interactive Demos
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground">
            AI Agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Explore my latest interactive agents designed to automate corporate research, streamline HR workflows, and push the boundaries of conversational AI.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
         PROJECTS GRID (Tighter spacing, App UI)
         ═══════════════════════════════════ */}
      <section id="projects" className="py-12 md:py-20 px-4 relative z-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">

            {/* ── PROJECT 1: Lucy ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <Card className="flex flex-col h-full bg-card border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold tracking-tight mb-1">Meet Lucy</CardTitle>
                        <CardDescription className="text-sm font-medium">Corporate Research & Pitch Assistant</CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-medium"><MessageSquare className="mr-1.5 h-3 w-3" /> Conversational</Badge>
                    <Badge variant="secondary" className="text-xs font-medium"><Zap className="mr-1.5 h-3 w-3" /> Real-time</Badge>
                    <Badge variant="secondary" className="text-xs font-medium"><Globe className="mr-1.5 h-3 w-3" /> Web Connected</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Lucy quickly turns a company website and a POC’s LinkedIn profile into clear reports, stakeholder insights, and pitch ideas. Built for fast-moving corporate teams, she eliminates manual research and equips you with the context you need to make smarter outreach.
                  </p>

                  {/* App Window UI Wrapper for Iframe */}
                  <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm mb-8 flex flex-col bg-muted/10">
                    {/* Mac-style Window Header */}
                    <div className="h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <div className="flex-1 text-center flex justify-center items-center">
                        <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                          <Globe className="w-3 h-3" /> app.relevanceai.com
                        </span>
                      </div>
                    </div>
                    {/* The Iframe */}
                    <div className="w-full h-[400px] sm:h-[450px] relative">
                      <iframe
                        src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                        className="absolute inset-0 w-full h-full border-0"
                        title="Lucy AI Agent"
                        loading="lazy"
                        allow="microphone; camera"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button variant="default" className="flex-1 shadow-md hover:shadow-primary/20 transition-all">
                      <MessageSquare className="mr-2 h-4 w-4" /> Chat with Lucy
                    </Button>
                    <Button variant="outline" asChild className="flex-1 bg-background hover:bg-muted">
                      <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── PROJECT 2: Jonathan ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
              <Card className="flex flex-col h-full bg-card border-border/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300 overflow-hidden group">
                <CardHeader className="p-6 md:p-8 pb-4">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent/10 text-accent-foreground shrink-0">
                        <Bot className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold tracking-tight mb-1">Meet Jonathan</CardTitle>
                        <CardDescription className="text-sm font-medium">Interactive HR Coach</CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs font-medium"><MessageSquare className="mr-1.5 h-3 w-3" /> SBI Framework</Badge>
                    <Badge variant="secondary" className="text-xs font-medium"><Zap className="mr-1.5 h-3 w-3" /> Feedback Loop</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Jonathan is an AI HR partner that guides managers through structured, conversational feedback collection using the SBI (Situation–Behavior–Impact) method. He asks for each component step-by-step and turns notes into polished performance reviews.
                  </p>

                  {/* App Window UI Wrapper for Iframe */}
                  <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm mb-8 flex flex-col bg-muted/10">
                    {/* Mac-style Window Header */}
                    <div className="h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <div className="flex-1 text-center flex justify-center items-center">
                        <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                          <Globe className="w-3 h-3" /> app.relevanceai.com
                        </span>
                      </div>
                    </div>
                    {/* The Iframe */}
                    <div className="w-full h-[400px] sm:h-[450px] relative">
                      <iframe
                        src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                        className="absolute inset-0 w-full h-full border-0"
                        title="Jonathan AI Agent Tool"
                        loading="lazy"
                        allow="microphone; camera"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button variant="default" className="flex-1 shadow-md hover:shadow-accent/20 transition-all">
                      <MessageSquare className="mr-2 h-4 w-4" /> Chat with Jonathan
                    </Button>
                    <Button variant="outline" asChild className="flex-1 bg-background hover:bg-muted">
                      <a href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Open in New Tab
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>

          {/* ── PROJECT 3: Coming Soon Placeholder ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
            <Card className="mt-8 md:mt-12 bg-muted/20 border-border/40 border-dashed overflow-hidden">
              <CardContent className="p-10 md:p-12 text-center">
                <div className="p-4 rounded-full bg-primary/5 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary/60" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">More Projects in the Pipeline</h3>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed mb-6">
                  I am constantly prototyping new ideas, agentic workflows, and LLM integrations. Stay tuned for deeper technical builds and industry-specific tools.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════
         FOOTER
         ═══════════════════════════════════ */}
      <footer className="py-8 px-4 border-t border-border/40 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
          <p className="text-sm font-medium text-foreground/80 mb-1">
            &copy; {new Date().getFullYear()} Vedank Bhatnagar.
          </p>
          <p className="text-xs text-muted-foreground">
            Building the future, one AI solution at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}