import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Loader2, Folder, FileCode, ChevronRight, Hash, Terminal, Info, Star, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Interface for GitHub repository data
interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  homepageUrl?: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
  repositoryTopics: {
    nodes: {
      topic: {
        name: string;
      };
    }[];
  };
}

// Resulting project interface
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  status: string;
  stars: number;
  forks: number;
  lang: string;
  isPinned?: boolean;
}

const STATIC_PROJECTS: Project[] = [
  {
    id: "ims",
    title: "Inventory Billing", 
    description: "Full-scale inventory management and invoicing system.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Praborkar/Inventory-Management-billing-System-",
    demo: "https://imsbilling.netlify.app/",
    status: "Live",
    stars: 2,
    forks: 1,
    lang: "PHP"
  },
  {
    id: "beta",
    title: "BETA Expense",
    description: "Financial tracking application with real-time feedback.",
    github: "https://github.com/Praborkar/BETA",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://beta-tech.netlify.app/",
    status: "Completed",
    stars: 0,
    forks: 0,
    lang: "TypeScript"
  },
  {
    id: "netwatch",
    title: "NetWatchHub",
    description: "Dynamic streaming dashboard with TMDB API integration.",
    techStack: ["React", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/Praborkar/netwatchhub",
    demo: "https://netwatchhub.netlify.app/",
    status: "Live",
    stars: 1,
    forks: 0,
    lang: "JavaScript"
  }
];

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "Praborkar";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [activeProject, setActiveProject] = useState<Project>(STATIC_PROJECTS[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const terminalLogsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      if (!GITHUB_TOKEN) {
        setIsLoading(false);
        return;
      }

      const query = `
        query($username: String!) {
          user(login: $username) {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  homepageUrl
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                    color
                  }
                  repositoryTopics(first: 5) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            query,
            variables: { username: GITHUB_USERNAME },
          }),
        });

        const result = await response.json();
        const pinnedRepos = result.data.user.pinnedItems.nodes as GitHubRepo[];
        
        const mappedProjects: Project[] = pinnedRepos.map((repo) => {
          const topics = repo.repositoryTopics.nodes.map(n => n.topic.name);
          const techStack = [repo.primaryLanguage?.name, ...topics].filter(Boolean);
          
          return {
            id: repo.name,
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            description: repo.description || "Exciting project hosted on GitHub.",
            github: repo.url,
            demo: repo.homepageUrl || repo.url,
            techStack: techStack.slice(0, 5),
            status: "Live",
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            lang: repo.primaryLanguage?.name || "Code",
            isPinned: true
          };
        });

        setProjects(mappedProjects);
        setActiveProject(mappedProjects[0]);
      } catch (err: any) {
        console.error("Error fetching GitHub repos:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-portfolio-indigo/10 text-portfolio-indigo px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-portfolio-indigo/20">
            <Terminal className="w-4 h-4" />
            Project Console
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Dev-<span className="text-portfolio-indigo">Explorer</span>
          </h2>
          <p className="text-lg text-portfolio-light max-w-3xl mx-auto opacity-70">
            Browse through my repositories as if you're in the workspace. Explore tech stacks, stars, and direct links in a professional IDE environment.
          </p>
        </motion.div>

        {/* IDE Container */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative w-full max-w-6xl mx-auto h-[600px] bg-portfolio-navy/20 backdrop-blur-3xl rounded-[2rem] border border-white/5 shadow-2xl flex overflow-hidden group"
        >
          {/* Sidebar - Explorer */}
          <div className={`${isExplorerOpen ? 'w-64' : 'w-12'} transition-all duration-500 border-r border-white/5 h-full flex flex-col bg-white/[0.02]`}>
            <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between">
              <span className={`text-[10px] font-bold uppercase tracking-widest text-white/30 ${!isExplorerOpen && 'hidden'}`}>Project Explorer</span>
              <button 
                onClick={() => setIsExplorerOpen(!isExplorerOpen)}
                className="hover:text-portfolio-indigo transition-colors"
              >
                 <ChevronRight className={`w-4 h-4 transform transition-transform ${isExplorerOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {isExplorerOpen && (
              <div className="p-4 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/40 text-xs font-bold mb-3 px-2">
                    <Folder className="w-4 h-4 text-portfolio-sky" />
                    repositories
                  </div>
                  <div className="space-y-0.5">
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setActiveProject(project)}
                        className={`w-full text-left px-4 py-2 rounded-lg text-xs flex items-center gap-3 transition-all duration-300 ${
                          activeProject.id === project.id 
                            ? 'bg-portfolio-indigo/20 text-white border border-portfolio-indigo/30' 
                            : 'text-white/40 hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <FileCode className={`w-4 h-4 ${activeProject.id === project.id ? 'text-portfolio-indigo' : 'text-white/20'}`} />
                        <span className="truncate">{project.title.toLowerCase().replace(/\s/g, '-')}.ts</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area - Editor */}
          <div className="flex-1 flex flex-col min-w-0">
             {/* Tabs Bar */}
             <div className="h-10 bg-white/[0.01] border-b border-white/5 flex items-center px-4 gap-2 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 px-6 py-2 h-10 border-b-2 border-portfolio-indigo bg-portfolio-indigo/5">
                  <FileCode className="w-3.5 h-3.5 text-portfolio-indigo" />
                  <span className="text-[10px] font-bold text-white truncate max-w-[120px]">{activeProject.title.toLowerCase().replace(/\s/g, '-')}.ts</span>
                </div>
                {/* Visual filler for high-end look */}
                <div className="flex-1" />
                <div className="flex gap-4">
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                  <a href={activeProject.demo} target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
                </div>
             </div>

             {/* Editor Pane */}
             <div className="flex-1 p-8 font-mono text-sm overflow-y-auto overflow-x-hidden custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed opacity-90">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex gap-6 overflow-hidden">
                       <div className="text-white/10 select-none text-right w-6 flex-shrink-0">
                          {Array.from({ length: 14 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                       </div>
                       
                       <div className="flex-1 space-y-2">
                          <div className="mb-6"><span className="text-white/40">/**</span></div>
                          <div className="flex gap-3"><span className="text-white/40"> * </span><span className="text-portfolio-indigo font-bold">@project</span><span className="text-portfolio-sky">{activeProject.title}</span></div>
                          <div className="flex gap-3"><span className="text-white/40"> * </span><span className="text-portfolio-indigo font-bold">@description</span><span className="text-white/60 italic overflow-hidden text-ellipsis">{activeProject.description}</span></div>
                          <div className="flex gap-3"><span className="text-white/40"> * </span><span className="text-portfolio-indigo font-bold">@status</span><Badge variant="outline" className="bg-emerald-400/10 text-emerald-400 text-[9px] uppercase border-emerald-400/20">{activeProject.status}</Badge></div>
                          <div className="flex gap-3"><span className="text-white/40"> * </span><span className="text-portfolio-indigo font-bold">@stars</span><span className="text-yellow-400/80 flex items-center gap-1"><Star className="w-3 h-3" />{activeProject.stars}</span></div>
                          <div className="mb-6"><span className="text-white/40"> */</span></div>

                          <div className="flex items-center gap-3">
                             <span className="text-purple-400">export</span>
                             <span className="text-purple-400">const</span>
                             <span className="text-blue-300">stack</span>
                             <span className="text-white/40">=</span>
                             <span className="text-white/60">[</span>
                          </div>
                          
                          <div className="pl-8 flex flex-wrap gap-2">
                             {activeProject.techStack.map((tech, i) => (
                               <span key={tech} className="text-emerald-400">"{tech}"{i !== activeProject.techStack.length - 1 ? ',' : ''}</span>
                             ))}
                          </div>
                          
                          <div className="text-white/60">];</div>

                          <div className="mt-12 flex gap-4 pt-12">
                             <Button
                                asChild
                                size="sm"
                                className="bg-portfolio-indigo hover:bg-portfolio-indigo/80 text-white rounded-xl px-6 h-10 font-bold tracking-tight shadow-lg shadow-portfolio-indigo/20"
                             >
                                <a href={activeProject.demo} target="_blank" rel="noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Run Demo
                                </a>
                             </Button>
                             <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="border-white/10 hover:bg-white/5 text-white/70 rounded-xl px-6 h-10 font-bold"
                             >
                                <a href={activeProject.github} target="_blank" rel="noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source
                                </a>
                             </Button>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>

             {/* Footer Console / Stats Area */}
             <div className="h-12 bg-white/[0.03] border-t border-white/5 flex items-center px-6 justify-between gap-6 overflow-hidden">
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-wider text-white/30 uppercase shrink-0">
                   <div className="flex items-center gap-1.5"><GitBranch className="w-3 h-3" /> main</div>
                   <div className="flex items-center gap-1.5 border-l border-white/10 pl-4"><Info className="w-3 h-3" /> UTF-8</div>
                </div>
                <div className="flex-1 flex justify-end gap-2 overflow-hidden items-center">
                   {activeProject.techStack.map(tech => (
                     <Badge key={tech} className="bg-white/5 text-white/20 border-white/5 text-[8px] font-bold uppercase py-0 px-2 shrink-0">{tech}</Badge>
                   ))}
                </div>
             </div>
          </div>
        </motion.div>

        {/* Global Loading / Error Fallbacks */}
        {isLoading && (
          <div className="mt-8 flex justify-center items-center gap-3 text-portfolio-indigo">
             <Loader2 className="w-5 h-5 animate-spin" />
             <span className="text-sm font-bold uppercase tracking-[0.2em]">Synchronizing Codebase...</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
