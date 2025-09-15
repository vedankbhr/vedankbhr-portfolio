"use client"

import type React from "react"

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
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  Brain,
  Rocket,
  Users,
  BarChart3,
  Send,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    philosophy: false,
    experience: false,
    expertise: false,
    portfolio: false,
    education: false,
    contact: false,
  })

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)

    // Check visibility of sections
    const sections = ["hero", "philosophy", "experience", "expertise", "portfolio", "education", "contact"]
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Message from Portfolio Contact Form")
    const body = encodeURIComponent(
      `Hi Vedank,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`,
    )
    const mailtoLink = `mailto:vedankbhatnagar165@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

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
          className="absolute top-1/3 right-1/3 w-8 h-8 md:w-16 md:h-16 bg-primary/5 rounded-full blur-md animate-float hover:scale-125 transition-transform duration-700"
          style={{ animationDelay: "1s", transform: `translateY(${scrollY * -0.12}px)` }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-10 h-10 md:w-20 md:h-20 bg-accent/5 rounded-full blur-lg animate-float hover:scale-125 transition-transform duration-700"
          style={{ animationDelay: "3s", transform: `translateY(${scrollY * 0.15}px)` }}
        />

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6 md:mb-8">
            <Badge
              variant="secondary"
              className="mb-4 animate-pulse-glow hover:scale-105 transition-transform duration-300 text-xs md:text-sm"
            >
              <Sparkles className="mr-2 h-3 w-3 animate-spin" />
              Building AI-driven solutions
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-balance hover:scale-105 transition-transform duration-500">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient hover:animate-pulse">
              Vedank
            </span>
            <br />
            <span className="text-foreground">Bhatnagar</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 md:mb-8 text-balance font-light animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Growth Strategist × AI Innovator × Startup Founder
          </p>

          <p
            className="text-base md:text-lg lg:text-xl text-foreground/80 mb-8 md:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed animate-fade-in-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            Transforming ambitious ideas into scalable AI-powered ventures. I bridge the gap between cutting-edge
            technology and strategic business growth, turning complex challenges into breakthrough opportunities.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in-up px-4"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="mailto:vedankbhatnagar165@gmail.com?subject=Let's Collaborate&body=Hi Vedank,%0D%0A%0D%0AI'd like to discuss a potential collaboration opportunity.%0D%0A%0D%0ABest regards,">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="mr-2 h-4 w-4 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Let's Collaborate</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className={`py-16 md:py-24 px-4 backdrop-blur-sm bg-card/30 border border-white/10 transition-all duration-1000 ${isVisible.philosophy ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-background/20 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-balance hover:scale-105 transition-transform duration-300">
              My Philosophy
            </h2>
            <blockquote className="text-lg md:text-2xl font-light text-muted-foreground italic mb-6 md:mb-8 text-pretty hover:text-foreground transition-colors duration-300">
              "The future belongs to those who can navigate complexity with clarity, turning AI possibilities into
              business realities."
            </blockquote>
            <p className="text-base md:text-lg text-foreground/80 text-pretty leading-relaxed hover:text-foreground transition-colors duration-300">
              I believe in the power of high-context thinking—understanding not just what needs to be done, but why it
              matters and how it connects to the bigger picture. My approach combines strategic vision with hands-on
              execution, ensuring every initiative drives meaningful impact.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className={`py-16 md:py-24 px-4 transition-all duration-1000 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance hover:scale-105 transition-transform duration-300">
              Professional Journey
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              From operations excellence to AI innovation leadership
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <Card className="border-l-4 border-l-primary relative overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-slide-in-left backdrop-blur-md bg-background/30 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10 p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                        Founder
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg">Stealth AI Startup • Gurgaon</CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="animate-pulse hover:scale-110 transition-transform duration-300 self-start sm:self-center"
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Aug 2025 — Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-foreground/90 mb-6 text-pretty">
                  Currently spearheading the conceptualization and strategic development of an AI-powered technology
                  platform that addresses complex niche operational challenges. Leading the complete entrepreneurial
                  journey from initial market research and competitive analysis to MVP development and early-stage
                  validation with potential enterprise clients.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Strategic Leadership
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Directed end-to-end product lifecycle from concept to market</li>
                      <li>• Analyzed complex operational challenges to define core business model</li>
                      <li>• Developed comprehensive product roadmap and go-to-market strategy</li>
                      <li>• Established strategic partnerships and early customer relationships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Entrepreneurial Excellence
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Built MVP from ground up with focus on scalable architecture</li>
                      <li>• Conducted market validation through customer discovery interviews</li>
                      <li>• Designed business model optimized for enterprise adoption</li>
                      <li>• Established operational frameworks for rapid scaling</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm">Strategic Development</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">MVP to Market</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Business Model Innovation</span>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Market Validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 animate-slide-in-right backdrop-blur-md bg-background/30 border-white/20"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Brain className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
                        Growth Manager
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg">
                        Soul AI (Deccan AI) • Hyderabad
                      </CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="hover:scale-110 transition-transform duration-300 self-start sm:self-center"
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Mar 2024 — Apr 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-foreground/90 mb-6 text-pretty">
                  Orchestrated cross-functional AI initiatives that directly accelerated enterprise sales and
                  strengthened product-market fit. Specialized in RLHF and Agentic AI systems, bridging technical
                  capabilities with client needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Built RLHF datasets that accelerated enterprise sales</li>
                      <li>• Streamlined product pipelines for faster decision-making</li>
                      <li>• Designed internal dashboards for strategic insights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Cross-functional project orchestration</li>
                      <li>• Sales enablement and data packaging</li>
                      <li>• Process design and optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-500 animate-slide-in-left backdrop-blur-md bg-background/30 border-white/20"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 bg-secondary/10 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Building2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl group-hover:text-secondary transition-colors duration-300">
                        Operations Associate
                      </CardTitle>
                      <CardDescription className="text-base">ConvertIAS • Bengaluru</CardDescription>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="hover:scale-110 transition-transform duration-300 self-start sm:self-center"
                  >
                    <Calendar className="mr-1 h-3 w-3" />
                    Jun 2023 — Feb 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-foreground/90 mb-6 text-pretty">
                  Foundation-building role where I developed expertise in operational excellence, cross-departmental
                  collaboration, and data-driven decision making. Played a pivotal role in streamlining workflows and
                  implementing best practices that enhanced organizational productivity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Streamlined operational workflows leading to enhanced productivity</li>
                      <li>• Implemented best practices in operations management</li>
                      <li>• Facilitated effective cross-departmental communication</li>
                      <li>• Supported high-impact projects achieving organizational goals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      <li>• Data management and reporting for decision-making</li>
                      <li>• Cross-functional team coordination and collaboration</li>
                      <li>• Process optimization and workflow enhancement</li>
                      <li>• Project support and strategic initiative execution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className={`py-16 md:py-24 px-4 backdrop-blur-sm bg-card/20 border-y border-white/10 transition-all duration-1000 ${isVisible.expertise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="backdrop-blur-md bg-background/20 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance hover:scale-105 transition-transform duration-300">
                Core Expertise
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Technical skills meets strategic thinking
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-300">
                <Brain className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                AI & Technology
              </h3>
              <p className="text-muted-foreground text-sm">RLHF, Agentic AI, AI Tools</p>
            </div>
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:bg-accent/20 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                Growth & Strategy
              </h3>
              <p className="text-muted-foreground text-sm">GTM Strategy, Market Research</p>
            </div>
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:bg-secondary/20 transition-all duration-300">
                <Users className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
                Operations
              </h3>
              <p className="text-muted-foreground text-sm">Project Management, Quality Control</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              "Project Management",
              "Agentic AI",
              "RLHF",
              "AI Tools",
              "Quality Control",
              "GTM Strategy",
              "Recruiting Strategy",
              "Market Research",
            ].map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs md:text-sm py-2 px-3 md:px-4 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className={`py-16 md:py-24 px-4 transition-all duration-1000 ${isVisible.portfolio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="backdrop-blur-md bg-background/20 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance hover:scale-105 transition-transform duration-300">
                Featured Project
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">Experience my AI agent in action</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
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
                      Interactive AI-powered conversational agent
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-base md:text-lg text-foreground/90 mb-6 text-pretty">
                  Try out my custom AI agent built with advanced conversational capabilities. This interactive tool
                  demonstrates my expertise in AI development and user experience design.
                </p>

                <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-white/20 backdrop-blur-sm bg-background/10">
                  <iframe
                    src="https://app.relevanceai.com/agents/d7b62b/0dd5f9a9-0d97-4b41-b3bb-6721b2a1407c/4b67f532-ff9e-4396-aa5f-ae6130d270d5/embed-chat?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
                    className="w-full h-full border-0"
                    title="AI Assistant Agent"
                    allow="microphone; camera"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                    Conversational AI
                  </Badge>
                  <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                    Natural Language Processing
                  </Badge>
                  <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                    Interactive Interface
                  </Badge>
                  <Badge variant="secondary" className="hover:scale-110 transition-transform duration-300">
                    Real-time Responses
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="education"
        className={`py-16 md:py-24 px-4 transition-all duration-1000 ${isVisible.education ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance hover:scale-105 transition-transform duration-300">
              Academic Foundation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Blending business acumen with interdisciplinary thinking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-500 animate-slide-in-left backdrop-blur-md bg-background/30 border-white/20">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                      MBA in General Management
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">Masters' Union, Gurgaon</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <Badge variant="outline" className="mb-4">
                  Aug 2025 — Present
                </Badge>
                <p className="text-sm text-foreground/80 mb-4">
                  Pursuing advanced business strategy, leadership, and management principles with a specialized focus on
                  technology innovation and entrepreneurship. The program emphasizes practical application of strategic
                  thinking in high-growth environments.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <Target className="h-3 w-3" />
                      Key Focus Areas
                    </h4>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      <li>• Strategic Management & Business Model Innovation</li>
                      <li>• Technology Leadership & Digital Transformation</li>
                      <li>• Entrepreneurship & Venture Development</li>
                      <li>• Data-Driven Decision Making & Analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <Brain className="h-3 w-3" />
                      Practical Application
                    </h4>
                    <p className="text-xs text-foreground/70">
                      Applying learnings directly to current startup venture, integrating academic frameworks with
                      real-world AI business challenges and market dynamics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl hover:scale-105 transition-all duration-500 animate-slide-in-right backdrop-blur-md bg-background/30 border-white/20"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl group-hover:text-accent transition-colors duration-300">
                      B.A. Triple Major
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base">Christ University, Bengaluru</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <Badge variant="outline" className="mb-4">
                  Aug 2020 — May 2024
                </Badge>
                <p className="text-sm text-foreground/80 mb-4">
                  Comprehensive interdisciplinary education combining Journalism, Psychology, and English Literature.
                  This unique combination developed critical thinking, human behavior analysis, and communication
                  excellence—essential skills for modern business leadership.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      Core Disciplines
                    </h4>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      <li>
                        • <strong>Journalism:</strong> Research methodology, data analysis, storytelling
                      </li>
                      <li>
                        • <strong>Psychology:</strong> Human behavior, decision-making, team dynamics
                      </li>
                      <li>
                        • <strong>English Literature:</strong> Critical analysis, communication, creative thinking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                      <Sparkles className="h-3 w-3" />
                      Business Relevance
                    </h4>
                    <p className="text-xs text-foreground/70">
                      This interdisciplinary foundation enables deep understanding of user psychology, effective
                      communication strategies, and analytical thinking—crucial for product development and growth
                      management in AI-driven businesses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-16 md:py-24 px-4 backdrop-blur-sm bg-card/30 border-t border-white/10 transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="backdrop-blur-md bg-background/20 border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance hover:scale-105 transition-transform duration-300">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Ready to discuss your next AI-driven growth initiative?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">Email</p>
                    <p className="text-sm text-muted-foreground">vedankbhatnagar165@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:bg-secondary/20 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-secondary transition-colors duration-300">Location</p>
                    <p className="text-sm text-muted-foreground">Udaipur, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/vedankbhr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect with me</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-500 animate-slide-in-right backdrop-blur-md bg-background/30 border-white/20">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Button type="submit" className="w-full group hover:scale-105 transition-all duration-300">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
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
