import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { InteractiveCanvas } from "./InteractiveCanvas";

interface HeroProps {
  onAnimationComplete: () => void;
}

export const Hero = ({ onAnimationComplete }: HeroProps) => {
  const nameRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const name = "Syed Iyanulla";
    const letters = name.split("");
    
    if (nameRef.current) {
      nameRef.current.innerHTML = letters
        .map((letter, i) => 
          `<span class="inline-block opacity-0" style="transform: translateY(50px)">${
            letter === " " ? "&nbsp;" : letter
          }</span>`
        )
        .join("");
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setTimeout(onAnimationComplete, 500);
      },
    });

    const letterSpans = nameRef.current?.querySelectorAll("span");

    tl.to(letterSpans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
    })
      .to(underlineRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .to({}, { duration: 0.8 })
      .to([nameRef.current, underlineRef.current], {
        scale: 0.4,
        x: "-35vw",
        y: "-40vh",
        duration: 1,
        ease: "power3.inOut",
      })
      .to(subtitleRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");
  }, [onAnimationComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <InteractiveCanvas />
      
      <div className="relative z-10 text-center">
        <div 
          ref={nameRef} 
          className="text-7xl md:text-9xl font-bold text-foreground mb-4"
        />
        
        <div className="flex justify-center mb-8">
          <div
            ref={underlineRef}
            className="h-2 w-64 md:w-96 gradient-text origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {!isAnimating && (
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground opacity-0 max-w-2xl mx-auto px-4"
            style={{ transform: "translateX(50px)" }}
          >
            I architect and build end-to-end web applications with modern technologies
          </p>
        )}
      </div>
    </section>
  );
};
