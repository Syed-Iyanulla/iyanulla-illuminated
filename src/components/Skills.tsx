import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "SQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "jQuery", "Web3", "RESTful APIs", "Bootstrap"],
  },
  {
    title: "Tools & Technologies",
    skills: ["VS Code", "Eclipse", "GCP", "Figma", "Git", "GitHub", "DApps", "Version Control", "Debugging"],
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const categories = sectionRef.current?.querySelectorAll(".skill-category");
    
    categories?.forEach((category, index) => {
      gsap.from(category, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: category,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Technical Skills</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 bg-card text-card-foreground rounded-xl shadow-soft border border-border hover:shadow-medium hover:scale-105 transition-smooth font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
