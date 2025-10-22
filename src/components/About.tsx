import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    
    elements?.forEach((element) => {
      gsap.from(element, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 animate-on-scroll">
          About Me
        </h2>
        
        <div className="space-y-6">
          <TextGenerateEffect
            words="Experienced Full Stack Developer specializing in MERN stack, with expertise in responsive UIs, robust backend systems, and scalable solutions using React, JavaScript, Firebase, and SQL databases."
            className="text-lg text-muted-foreground"
            duration={0.5}
          />
          
          <TextGenerateEffect
            words="I architect end-to-end web applications using React for dynamic front-end experiences and modern JavaScript technologies. My focus is on building robust backend architectures and optimizing database performance for scalable web applications."
            className="text-lg text-muted-foreground"
            duration={0.5}
          />
          
          <TextGenerateEffect
            words="Currently pursuing Bachelor of Information Science at GM Institute of Technology, Davangere, Karnataka (2022-2026)."
            className="text-lg text-muted-foreground"
            duration={0.5}
          />
        </div>
      </div>
    </section>
  );
};
