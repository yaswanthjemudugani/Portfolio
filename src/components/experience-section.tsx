import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            Building scalable infrastructure and automating deployments
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card className="glass-bg border-primary/20 shadow-glow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl gradient-text">DevOps Engineer</CardTitle>
                  <p className="text-xl font-semibold text-foreground">PennyWise Solutions Pvt Ltd (Ogilvy)</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Nov 2022 – Present</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Designed and managed scalable infrastructure on <strong>AWS, Azure, GCP</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Automated provisioning & deployments with <strong>Terraform, Ansible, CloudFormation, Python, Bash</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Containerized applications using <strong>Docker</strong>, orchestrated with <strong>Kubernetes (EKS, AKS, GKE)</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Built & maintained CI/CD pipelines with <strong>Jenkins, GitHub Actions, GitLab CI, ArgoCD</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Configured monitoring with <strong>Prometheus, Grafana, CloudWatch, Azure Monitor</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Created deployment guides & runbooks
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-foreground">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI", "Python", "Bash"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}