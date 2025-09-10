import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yaswanth.professional@gmail.com",
    href: "mailto:yaswanth.professional@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-97037XXXXX",
    href: null // disable direct click
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: "#"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yaswanthjemudugani",
    href: "https://www.linkedin.com/in/yaswanthjemudugani"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "yaswanthjemudugani",
    href: "https://github.com/yaswanthjemudugani"
  }
]

export function ContactSection() {
  const [message, setMessage] = useState("")

  const handleDownloadResume = () => {
    setMessage(
      "📌 As part of security best practices, the resume download feature is disabled. Please reach out via email only."
    )
  }

  const handlePhoneClick = () => {
    setMessage(
      "📌 For security reasons, direct phone number access is disabled. Please connect with me via email only."
    )
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on DevOps automation, CI/CD pipelines, and cloud infrastructure projects. 
            I'm always open to discussing new opportunities and challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-bg border-primary/20 shadow-glow animate-slide-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold gradient-text mb-6">Contact Information</h3>
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon
                    return (
                      <div
                        key={contact.label}
                        className="flex items-center space-x-4 group cursor-pointer"
                        onClick={
                          contact.label === "Phone"
                            ? handlePhoneClick
                            : undefined
                        }
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href && contact.href !== "#" ? (
                            <a
                              href={contact.href}
                              target={contact.href.startsWith("http") ? "_blank" : undefined}
                              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Call to Action */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold gradient-text mb-6">Let's Work Together</h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you need help with cloud infrastructure, DevOps automation, or CI/CD pipeline optimization, 
                    I'm here to help bring your projects to life with cutting-edge solutions.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full shadow-glow"
                      onClick={() => window.open("mailto:yaswanth.professional@gmail.com")}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send an Email
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={handleDownloadResume}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </div>

                  {message && (
                    <p className="mt-4 text-sm text-red-500 font-medium text-center animate-fade-in">
                      {message}
                    </p>
                  )}

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      💬 Ask me about AWS, Azure, GCP, Docker, Kubernetes, Jenkins, Terraform, Ansible, CI/CD, and monitoring tools
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
