// components/common/LenisProvider.tsx
'use client';
import React, { useEffect, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, offset?: number) => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => { },
});

export const useSmoothScroll = () => useContext(LenisContext);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    setLenisInstance(lenis);

    if (typeof window !== 'undefined') {
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global smooth-scroll handler for anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      // Prevent immediate abrupt browser jumping
      e.preventDefault();

      const targetId = href.replace(/^#/, '');

      if (!targetId || targetId === 'top') {
        lenis.scrollTo(0, { duration: 1.2 });
        window.history.pushState(null, '', window.location.pathname);
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // -80px offset ensures section headings aren't obscured by the fixed floating navbar
        lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
        window.history.pushState(null, '', `#${targetId}`);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement, offset = -80) => {
    if (!lenisInstance) return;
    if (typeof target === 'string') {
      const id = target.replace(/^#/, '');
      if (!id || id === 'top') {
        lenisInstance.scrollTo(0, { duration: 1.2 });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        lenisInstance.scrollTo(el, { offset, duration: 1.2 });
      }
    } else {
      lenisInstance.scrollTo(target, { offset, duration: 1.2 });
    }
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
