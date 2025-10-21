import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/syediyanulla",
    username: "syediyanulla",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/syediyanulla",
    username: "syediyanulla",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:syediyanulla@gmail.com",
    username: "syediyanulla@gmail.com",
  },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".contact-item");
    
    items?.forEach((item, index) => {
      gsap.from(item, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Connect</h2>
        
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-smooth">
                <link.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-smooth" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{link.label}</h3>
              
              <p className="text-muted-foreground text-sm mb-4">{link.username}</p>
              
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-smooth" />
            </a>
          ))}
        </div>
        
        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Syed Iyanulla. Built with React, GSAP, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
