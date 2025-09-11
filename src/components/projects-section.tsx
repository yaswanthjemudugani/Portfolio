import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin } from "lucide-react"

const projects = [
  {
    title: "Bursa Bull Charge",
    location: "Malaysia – Asia",
    description: "Next.js & Node.js application deployment on EKS with comprehensive CI/CD automation",
    technologies: ["AWS CloudFormation", "GitLab", "Jenkins", "Docker", "EKS", "SonarQube"],
    achievements: [
      "Deployed Next.js & Node.js apps on EKS (Fargate)",
      "Automated infra with CloudFormation Templates",
      "Built CI/CD pipelines with GitLab + Jenkins",
      "Integrated SonarQube for code quality",
      "Performed zero-downtime rolling updates"
    ]
  },
  {
    title: "VetsMedicover",
    location: "London – UK",
    description: "Healthcare application infrastructure on Azure with robust security and performance optimization",
    technologies: ["Azure", "Linux VM", "Jenkins", "GitLab", "Cloudflare", "Apache", "MySQL"],
    achievements: [
      "Hosted apps on Azure Linux VMs with Apache",
      "Built Jenkins CI/CD pipelines integrated with GitLab",
      "Managed MySQL & PHP apps with DR readiness",
      "Applied Cloudflare WAF + CDN for security & performance",
      "Used SonarQube for code quality"
    ]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Key Projects</h2>
          <p className="text-lg text-muted-foreground">
            Real-world DevOps implementations across global markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-bg border-primary/20 shadow-glow animate-slide-up transition-transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Globe className="mr-2 h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mt-3">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
