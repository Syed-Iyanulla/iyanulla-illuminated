import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const initialsRef = useRef<HTMLDivElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.to(initialsRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(initialsRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .to(
        [panelTopRef.current, panelBottomRef.current],
        {
          yPercent: (i) => (i === 0 ? -100 : 100),
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.3"
      );
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div
        ref={panelTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-muted"
      />
      <div
        ref={panelBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-muted"
      />
      <div
        ref={initialsRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 scale-90"
      >
        <h1 className="text-8xl font-bold gradient-text">SI</h1>
      </div>
    </div>
  );
};
