import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Rozgaar",
    subtitle: "Bridging Rural Talent with Jobs Digitally",
    description:
      "Developed platform connecting rural workers to jobs through location-based search and AI-driven matching. Enhanced accessibility with multilingual support, 30% faster load times, and a user-friendly UI for low-tech users.",
    tech: ["HTML5/EJS", "Tailwind CSS", "Express", "Leaflet.js"],
    date: "February 2025",
  },
  {
    title: "IGNITRON 2K24",
    subtitle: "EduHustle Learning Platform",
    description:
      "Developed a full-stack LMS increasing student engagement by 40% through intuitive interfaces while reducing course setup time by 60%. Boosted security by 85% via multi-layer authentication.",
    tech: ["HTML5/EJS", "Tailwind CSS", "JavaScript", "PostgreSQL"],
    date: "December 2024",
  },
  {
    title: "Skill-Hub",
    subtitle: "Interactive Learning Platform",
    description:
      "Developed educational platform transforming traditional learning into engaging, interactive experiences. Built responsive React.js frontend with wallet integration, achieving 75% improved user engagement.",
    tech: ["React", "TypeScript", "Express.js", "Thirdweb"],
    date: "November 2024",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".project-card");
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
              </div>
              
              <p className="text-sm text-accent font-medium mb-3">
                {project.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground">{project.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
