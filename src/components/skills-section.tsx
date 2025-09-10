import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Settings, 
  Shield, 
  Database, 
  Code, 
  Monitor,
  Server
} from "lucide-react"

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP"],
    color: "text-blue-500"
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "EKS", "AKS", "GKE"],
    color: "text-cyan-500"
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
    color: "text-green-500"
  },
  {
    title: "IaC & Config Management",
    icon: Settings,
    skills: ["Terraform", "CloudFormation", "Ansible"],
    color: "text-orange-500"
  },
  {
    title: "Monitoring & Security",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "CloudWatch", "Nagios", "SonarQube"],
    color: "text-purple-500"
  },
  {
    title: "Databases & Web Stack",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Apache", "Nginx"],
    color: "text-red-500"
  },
  {
    title: "Scripting & Languages",
    icon: Code,
    skills: ["Python", "Bash", "YAML", "JSON"],
    color: "text-yellow-500"
  },
  {
    title: "Operating Systems",
    icon: Server,
    skills: ["Ubuntu", "CentOS", "RedHat", "Amazon Linux"],
    color: "text-indigo-500"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Expertise across the DevOps toolchain and cloud platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.title} 
                className="glass-bg border-primary/20 shadow-glow animate-slide-up transition-transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-full bg-muted/50 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}