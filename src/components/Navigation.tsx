import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Code, Mail, FolderKanban, Home } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

export const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.opacity = "0";
      navRef.current.style.transform = "translateY(100px)";
      
      setTimeout(() => {
        if (navRef.current) {
          navRef.current.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
          navRef.current.style.opacity = "1";
          navRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "Home", id: "home", icon: Home },
    { label: "About", id: "about", icon: User },
    { label: "Projects", id: "projects", icon: FolderKanban },
    { label: "Experience", id: "experience", icon: Briefcase },
    { label: "Skills", id: "skills", icon: Code },
    { label: "Contact", id: "contact", icon: Mail },
  ];

  return (
    <div ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-fit">
      <Dock className="items-end pb-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="focus:outline-none"
            >
              <DockItem className="aspect-square rounded-full bg-background/80 backdrop-blur-md border border-border cursor-pointer">
                <DockLabel>{item.label}</DockLabel>
                <DockIcon>
                  <Icon className="h-full w-full text-foreground" />
                </DockIcon>
              </DockItem>
            </button>
          );
        })}
      </Dock>
    </div>
  );
};
