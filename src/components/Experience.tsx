import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Accenture",
    role: "Job Simulation: Data Analytics and Visualization",
    location: "North America",
    date: "November 2024",
    description: [
      "Developed hands-on experience with project scoping, data cleaning and modeling, creating impactful data visualizations, and presenting insights to a client.",
      "Leveraged tools like Excel, Tableau, and Python to transform raw data into meaningful, actionable information.",
    ],
  },
  {
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    location: "Bengaluru, Karnataka",
    date: "18 Feb 2024 – 18 Mar 2024",
    description: [
      "Created a Weather Forecasting WebApp and personal portfolio using JavaScript, demonstrating skills in DOM manipulation and responsive design.",
      "Developed a daily report visualization system using HTML, Javascript, and CSS for efficient team communication.",
    ],
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".experience-item");
    
    items?.forEach((item, index) => {
      gsap.from(item, {
        x: index % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-muted to-background"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-item relative pl-20"
              >
                <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-accent-foreground" />
                </div>
                
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.date}</span>
                  </div>
                  
                  <p className="text-accent font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
