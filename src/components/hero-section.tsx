import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Download } from "lucide-react"

const yaswanthProfile = "/lovable-uploads/210041f1-4e3f-4bd5-ba65-e0ef59a44fb8.png"

export function HeroSection() {
  const [resumeMessage, setResumeMessage] = useState("")

  const handleDownloadResume = () => {
    // Instead of download, show message
    setResumeMessage(
      "📌 As part of security best practices, the resume download feature is disabled. Please reach out via email for a copy."
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="gradient-text">Yaswanth Jemudugani</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                DevOps Engineer – Technology<br />
                <span className="text-primary">Hyderabad, India</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Automating Infrastructure | Scaling Deployments | Boosting Productivity with{" "}
                <span className="gradient-text font-semibold">Gen AI</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="shadow-glow"
                onClick={() => window.open("mailto:yaswanth.professional@gmail.com")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/yaswanthjemudugani", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://github.com/yaswanthjemudugani", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleDownloadResume}
                className="shadow-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Resume Message */}
            {resumeMessage && (
              <p className="mt-4 text-sm text-red-500 font-medium animate-fade-in">
                {resumeMessage}
              </p>
            )}
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 scale-110"></div>
              <img
                src={yaswanthProfile}
                alt="Yaswanth Jemudugani - DevOps Engineer"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
