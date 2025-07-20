import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Inventory Management System", 
    description: "A system for managing inventory, billing, and invoicing.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Praborkar/Inventory-Management-billing-System-",
    demo: "https://imsbilling.netlify.app/",
    status: "Live"
  },
  {
    title: "BETA",
    description: "BETA is an expense tracking application designed to help users manage and monitor their finances efficiently.",
    github: "https://github.com/Praborkar/BETA",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    // github: "#",
    demo: "https://beta-tech.netlify.app/",
    status: "Completed"
  },
  {
    title: "NetWatchHub",
    description: "A streaming dashboard showcasing movies and shows using TMDB API.",
    techStack: ["React", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/Praborkar/netwatchhub",
    demo: "https://netwatchhub.netlify.app/",
    status: "Live"
  },
  {
    title: "Shared Vault Access",
    description: "Secure file-sharing system with role-based access, email verification, and expiring links.",
    techStack: ["FastAPI", "REST", "EmailJS", "JSON"],
    github: "https://github.com/Praborkar/shared-vault-access",
    demo: "https://benevolent-piroshki-584b99.netlify.app/",
    status: "Completed"
  },
  {
    title: "StarMedic Hub",
    description: "Platform for managing patient records, prescriptions, and pharmacy orders securely.",
    techStack: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Praborkar/StarMedic-Hub",
    demo: "#",
    status: "Coming Soon"
  },
  
  {
    title: "Dynamic SOL Token Launch",
    description: "A Web3 engineering project for launching a Solana token using Dynamic Bonding Curve and DAMM V2 pool. Includes token creation, migration logic, and fee claiming.",
    techStack: ["Solana", "TypeScript", "Rust", "Meteora SDK"],
    github: "https://github.com/Praborkar/dynamic-sol-token-launch-main",
    demo: "#",
    status: "Completed"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the web development community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="h-full transition-all duration-500 ease-in-out"
            >
              <Card className="h-full flex flex-col card-hover border-2 hover:border-portfolio-indigo/50 bg-card/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-portfolio-indigo/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-portfolio-sky">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : project.status === "Completed" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-portfolio-sky/30 text-portfolio-light">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                       <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 btn-glow hover:border-portfolio-indigo border-portfolio-sky/30 text-portfolio-sky transition-all duration-500 ease-in-out hover:bg-portfolio-indigo/10"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      
                      {project.demo !== "#" ? (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 gradient-primary hover:scale-105 transition-all duration-500 ease-in-out"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="flex-1 opacity-50 bg-muted"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;