import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { renderCanvas } from "@/components/ui/canvas";

interface HeroProps {
  onAnimationComplete: () => void;
}

const bioTexts = [
  "Crafting intuitive user interfaces with pixel-perfect attention to detail",
  "Transforming complex ideas into seamless digital experiences",
  "Building responsive designs that blend aesthetics with functionality"
];

export const Hero = ({ onAnimationComplete }: HeroProps) => {
  const nameRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentBioIndex, setCurrentBioIndex] = useState(0);

  useEffect(() => {
    renderCanvas();
  }, []);

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
      .to({}, { duration: 1 });
  }, [onAnimationComplete]);

  useEffect(() => {
    if (!isAnimating) {
      const interval = setInterval(() => {
        setCurrentBioIndex((prev) => (prev + 1) % bioTexts.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        className="pointer-events-none absolute inset-0"
        id="canvas"
      />
      
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
          <div className="h-16 flex items-center justify-center max-w-2xl mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentBioIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                {bioTexts[currentBioIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
