"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Brain, ArrowLeft, ExternalLink } from "lucide-react"
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
      <ThemeToggle />

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" asChild className="backdrop-blur-md bg-background/30 border-white/20">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient" />
        <div
          className="absolute top-10 left-4 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-primary/10 rounded-full blur-xl animate-float hover:scale-110 transition-transform duration-500"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-24 h-24 md:w-48 md:h-48 bg-accent/10 rounded-full blur-xl animate-float hover:scale-110 transition-transform duration-700"
          style={{ animationDelay: "2s", transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 md:w-24 md:h-24 bg-secondary/10 rounded-full blur-lg animate-float hover:scale-110 transition-transform duration-700"
          style={{ animationDelay: "4s", transform: `translateY(${scrollY * 0.08}px)` }}
        />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="backdrop-blur-md bg-background/20 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance hover:scale-105 transition-transform duration-500">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                My Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 text-balance font-light">
              Innovative AI solutions and interactive experiences
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Explore my portfolio of AI-powered projects that demonstrate the intersection of technology and user
              experience.
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
            <Card className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-background/30 border-white/20">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                      AI Assistant Agent
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      Interactive conversational AI with advanced capabilities
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-foreground/90 mb-6 text-pretty">
                  A sophisticated AI agent built with advanced natural language processing capabilities. Features
                  real-time conversation, context awareness, and intelligent responses tailored to user needs.
                </p>

                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-white/20 backdrop-blur-sm bg-background/10 mb-6">
                  <iframe
                    src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                    className="w-full h-full border-0"
                    title="AI Assistant Agent"
                    allow="microphone; camera"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Advanced natural language understanding</li>
                      <li>• Context-aware conversation flow</li>
                      <li>• Real-time response generation</li>
                      <li>• Multi-modal interaction support</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                      Conversational AI
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                      NLP
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                      Interactive UI
                    </Badge>
                    <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                      Real-time
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group hover:scale-105 transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      Open in New Tab
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder for future projects */}
            <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-background/30 border-white/20 border-dashed">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-muted/10 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      More Projects Coming Soon
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      Exciting AI innovations in development
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-muted-foreground mb-6 text-pretty">
                  I'm constantly working on new AI-powered solutions and innovative projects. Stay tuned for more
                  exciting developments that showcase the future of technology and user experience.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-muted-foreground">Upcoming Focus Areas</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Advanced AI automation tools</li>
                      <li>• Data visualization platforms</li>
                      <li>• Machine learning applications</li>
                      <li>• Interactive web experiences</li>
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group hover:scale-105 transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <Link href="/#contact">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      Get in Touch
                    </Link>
                  </Button>
                </div>
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
