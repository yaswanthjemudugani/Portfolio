import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Google Cloud Certified: Associate Cloud Engineer",
    issuer: "Google Cloud",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    icon: "🏆"
  },
  {
    title: "Microsoft Certified: Azure Administrator",
    issuer: "Microsoft",
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    icon: "🥇"
  },
  {
    title: "AWS Certified: Cloud Practitioner",
    issuer: "Amazon Web Services",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    icon: "🏅"
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    icon: "📜"
  },
  {
    title: "Jira Fundamentals",
    issuer: "Atlassian",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    icon: "🎖️"
  }
]

const education = {
  degree: "Bachelor of Technology",
  institution: "JNTU Kakinada",
  location: "Andhra Pradesh",
  icon: "🎓"
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Certifications & Education</h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications and academic background
          </p>
        </div>

        <div className="space-y-12">
          {/* Certifications */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title} 
                  className="glass-bg border-primary/20 shadow-glow animate-scale-in transition-transform hover:scale-105 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm leading-tight mb-2">{cert.title}</h4>
                      <Badge variant="secondary" className={cert.color}>
                        {cert.issuer}
                      </Badge>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="max-w-2xl mx-auto">
              <Card className="glass-bg border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-4xl mr-3">{education.icon}</div>
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold gradient-text mb-2">{education.degree}</h4>
                  <p className="text-lg text-muted-foreground mb-1">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.location}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}