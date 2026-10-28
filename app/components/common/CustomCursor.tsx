"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid, premium lag-free movement
  const springConfig = { damping: 26, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Outer ring spring for trailing halo
  const ringSpringConfig = { damping: 20, stiffness: 200 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setIsDesktop(media.matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect hover over clickable elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.tagName === "INPUT")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Central precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[var(--accent)] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Trailing smooth halo ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-[var(--accent)] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isHovered ? 0.6 : 0.25,
        }}
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}