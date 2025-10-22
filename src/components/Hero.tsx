import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface HeroProps {
  onAnimationComplete: () => void;
}

const bioTexts = [
  "Crafting intuitive user interfaces with pixel-perfect attention to detail",
  "Transforming complex ideas into seamless digital experiences",
  "Building responsive designs that blend aesthetics with functionality"
];

export const Hero = ({ onAnimationComplete }: HeroProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentBioIndex, setCurrentBioIndex] = useState(0);

  useEffect(() => {
    // Trigger animation complete after name animation finishes
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 2500);

    return () => clearTimeout(timer);
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
    <BackgroundBeamsWithCollision className="min-h-screen">
      <div className="relative z-10 text-center">
        <AnimatedText
          text="Syed Iyanulla"
          textClassName="text-7xl md:text-9xl font-bold text-foreground"
          underlineGradient="from-primary via-purple-500 to-pink-500"
          underlineHeight="h-2"
          underlineOffset="-bottom-4"
          duration={0.05}
          delay={0.05}
        />

        {!isAnimating && (
          <div className="h-16 flex items-center justify-center max-w-2xl mx-auto px-4 mt-12">
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
    </BackgroundBeamsWithCollision>
  );
};
