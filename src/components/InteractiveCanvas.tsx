import { useEffect, useRef } from "react";

export const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });

      if (trailRef.current.length > 30) {
        trailRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current.forEach((point, index) => {
        point.age += 1;
        
        const progress = index / trailRef.current.length;
        const hue = 260 + progress * 30; // Purple to blue gradient
        const alpha = (1 - point.age / 60) * 0.6;
        const size = 20 * (1 - point.age / 60);

        if (alpha > 0) {
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            size
          );
          gradient.addColorStop(0, `hsla(${hue}, 83%, 58%, ${alpha})`);
          gradient.addColorStop(1, `hsla(${hue}, 83%, 58%, 0)`);

          ctx.fillStyle = gradient;
          ctx.fillRect(
            point.x - size,
            point.y - size,
            size * 2,
            size * 2
          );
        }
      });

      trailRef.current = trailRef.current.filter((point) => point.age < 60);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
