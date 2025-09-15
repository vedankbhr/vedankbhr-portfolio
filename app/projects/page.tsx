"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
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
        <Button variant="outline" size="sm" asChild className="backdrop-blur-md bg-card/40 border-border/60">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* ... existing code ... */}

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="backdrop-blur-md bg-card/40 border border-border/60 rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* ... existing code ... */}
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
              {/* ... existing code ... */}
              <CardContent className="p-4 md:p-6 pt-0">
                {/* ... existing code ... */}

                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border/60 backdrop-blur-sm bg-card/20 mb-6">
                  {/* ... existing code ... */}
                </div>

                {/* ... existing code ... */}
              </CardContent>
            </Card>

            {/* Placeholder for future projects */}
            <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-500 animate-fade-in-up backdrop-blur-md bg-card/40 border-border/60 border-dashed">
              {/* ... existing code ... */}
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
