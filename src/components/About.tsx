import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

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
        
        <MaskContainer
          revealText={
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="animate-on-scroll">
                Experienced Full Stack Developer specializing in MERN stack, with expertise 
                in responsive UIs, robust backend systems, and scalable solutions using React, 
                JavaScript, Firebase, and SQL databases.
              </p>
              
              <p className="animate-on-scroll">
                I architect end-to-end web applications using React for dynamic front-end 
                experiences and modern JavaScript technologies. My focus is on building robust 
                backend architectures and optimizing database performance for scalable web applications.
              </p>
              
              <p className="animate-on-scroll">
                Currently pursuing Bachelor of Information Science at GM Institute of Technology, 
                Davangere, Karnataka (2022-2026).
              </p>
            </div>
          }
          className="h-auto min-h-[500px] border-none bg-transparent"
          size={10}
          revealSize={400}
        >
          <div className="space-y-6 text-lg px-6">
            <p>
              Experienced Full Stack Developer specializing in MERN stack, with expertise 
              in responsive UIs, robust backend systems, and scalable solutions using React, 
              JavaScript, Firebase, and SQL databases.
            </p>
            
            <p>
              I architect end-to-end web applications using React for dynamic front-end 
              experiences and modern JavaScript technologies. My focus is on building robust 
              backend architectures and optimizing database performance for scalable web applications.
            </p>
            
            <p>
              Currently pursuing Bachelor of Information Science at GM Institute of Technology, 
              Davangere, Karnataka (2022-2026).
            </p>
          </div>
        </MaskContainer>
      </div>
    </section>
  );
};
