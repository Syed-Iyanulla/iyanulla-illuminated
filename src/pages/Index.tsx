import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [heroComplete, setHeroComplete] = useState(false);

  return (
    <>
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}
      
      {preloaderComplete && (
        <div className="relative">
          <Hero onAnimationComplete={() => setHeroComplete(true)} />
          
          {heroComplete && (
            <>
              <Navigation />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Contact />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Index;
