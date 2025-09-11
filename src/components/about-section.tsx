import { Card, CardContent } from "@/components/ui/card"
const devopsIllustration = "/assets/DataDevOps.png"

export function AboutSection() {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            🚀 DevOps Engineer | ☁️ Multi-Cloud | ⚙️ Automation Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-bg border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a DevOps Engineer with <span className="text-primary font-semibold">3 years</span> of hands-on experience 
                  in automating infrastructure and optimizing deployment processes. I specialize in CI/CD pipelines, 
                  Docker, Kubernetes, and multi-cloud environments across AWS, Azure, and GCP.
                </p>
                <p className="text-lg leading-relaxed">
                  My focus is on building scalable and reliable systems while leveraging{" "}
                  <span className="gradient-text font-semibold">Gen AI tools</span> to accelerate workflows and boost productivity.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔭</span>
                <p className="text-muted-foreground">
                  I'm currently working as a DevOps Engineer with Gen AI integration for increasing the DevOps productivity output.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌱</span>
                <p className="text-muted-foreground">
                  I'm currently exploring <span className="text-primary">📊 Data + 🚀 Dev + ♾️ Ops</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">👯</span>
                <p className="text-muted-foreground">
                  I'm looking to collaborate on DevOps automation, CI/CD pipelines, and cloud infrastructure projects
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🤔</span>
                <p className="text-muted-foreground">
                  I'm looking for help with contributing to open-source DevOps tools
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💬</span>
                <p className="text-muted-foreground">
                  Ask me about AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Terraform, Ansible, CI/CD, and monitoring tools
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <p className="text-muted-foreground">
                  Fun fact: I automate my tasks so well that sometimes I forget how to do them manually 😅
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - DevOps Illustration */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-10 scale-110"></div>
              <img
                src={devopsIllustration}
                alt="DevOps Data Dev Ops Illustration"
                className="relative w-full max-w-md rounded-2xl border border-primary/20 shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
