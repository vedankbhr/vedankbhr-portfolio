"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, MessageSquare, Zap, Globe } from 'lucide-react'
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

export default function Projects() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    projects: false,
  })

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)

    // Check visibility of sections
    const sections = ["hero", "projects"]
    const newVisibility = {} as typeof isVisible

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
        newVisibility[section as keyof typeof isVisible] = isInView
      }
    })

    // Only update state if visibility actually changed
    setIsVisible((prev) => {
      const hasChanged = sections.some(
        (section) => prev[section as keyof typeof isVisible] !== newVisibility[section as keyof typeof isVisible],
      )
      return hasChanged ? newVisibility : prev
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild className="backdrop-blur-md bg-card/40 border-border/60">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          />
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="backdrop-blur-md bg-card/40 border border-border/60 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore my latest AI innovations and digital solutions that push the boundaries of technology.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-16 md:py-24 px-4 transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* AI Assistant Agent */}
            <Card className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-card/40 border-border/60">
              <div className="p-4 md:p-6 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Meet Lucy - Your Corporate Research &amp; Pitch Assistant</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Conversational AI
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="mr-1 h-3 w-3" />
                    Real-time Responses
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Globe className="mr-1 h-3 w-3" />
                    Web Integration
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  Lucy quickly turns a company website and a POC’s LinkedIn profile into clear reports, stakeholder insights, and pitch ideas. Built for fast-moving corporate teams, she eliminates manual research and equips you with the context you need to make smarter, more effective outreach.
                </p>

                <div className="relative w-full rounded-lg overflow-hidden border border-border/60 backdrop-blur-sm bg-card/20 mb-6">
                  {/* Mobile-specific sizing */}
                  <div className="block sm:hidden">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=true&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[350px] border-0"
                      title="AI Assistant Agent - Mobile"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Desktop/tablet sizing */}
                  <div className="hidden sm:block">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[500px] border-0"
                      title="AI Assistant Agent"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Loading overlay */}
                  <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="text-center">
                      <Bot className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse" />
                      <p className="text-sm text-muted-foreground">AI Agent Ready</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 group-hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      const iframe = document.querySelector('iframe[title*="AI Assistant"]') as HTMLIFrameElement
                      if (iframe) {
                        iframe.focus()
                      }
                    }}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Try AI Agent
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                    <a
                      href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Open Full View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Agent Tool */}
            <Card className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-card/40 border-border/60">
              <div className="p-4 md:p-6 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Meet Jonathan - Your Interactive HR Coach </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Advanced Processing
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="mr-1 h-3 w-3" />
                    Fast & Efficient
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Globe className="mr-1 h-3 w-3" />
                    Web Integration
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  Jonathan is an AI HR partner that guides managers through structured, conversational feedback collection using the SBI (Situation–Behavior–Impact) method. He asks for each SBI component step-by-step, records the discussion, and turns those notes into polished performance reviews and personalized growth charts.
                </p>

                <div className="relative w-full rounded-lg overflow-hidden border border-border/60 backdrop-blur-sm bg-card/20 mb-6">
                  {/* Mobile-specific sizing */}
                  <div className="block sm:hidden">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=true&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[350px] border-0"
                      title="AI Agent Tool - Mobile"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Desktop/tablet sizing */}
                  <div className="hidden sm:block">
                    <iframe
                      src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                      className="w-full h-[500px] border-0"
                      title="AI Agent Tool"
                      loading="lazy"
                      allow="microphone; camera"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>

                  {/* Loading overlay */}
                  <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="text-center">
                      <Bot className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse" />
                      <p className="text-sm text-muted-foreground">AI Agent Ready</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 group-hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      const iframe = document.querySelector('iframe[title*="AI Agent Tool"]') as HTMLIFrameElement
                      if (iframe) {
                        iframe.focus()
                      }
                    }}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Try AI Agent
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                    <a
                      href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/a7acb787-460d-4188-b9a8-3801f975e9a4/embed-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Open Full View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder for future projects */}
            <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-card/40 border-border/60 border-dashed">
              <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <div className="p-4 rounded-full bg-muted/50 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  I'm constantly working on new innovative solutions. Stay tuned for more exciting AI-powered projects
                  and digital experiences.
                </p>
                <Button variant="outline" size="sm" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 px-4 bg-background border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 hover:text-foreground transition-colors duration-300 text-sm md:text-base">
            &copy; 2025 Vedank Bhatnagar. Crafted with precision and passion.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Building the future, one AI solution at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
