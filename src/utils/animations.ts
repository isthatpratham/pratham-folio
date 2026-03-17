import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Global cursor effect
  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    transition: all 0.1s ease;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.1
    });
  });

  // Refresh ScrollTrigger
  ScrollTrigger.refresh();
};

export const fadeInUp = (selector: string, delay = 0) => {
  gsap.fromTo(selector, 
    { opacity: 0, y: 50, filter: 'blur(5px)' },
    { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)', 
      duration: 1, 
      delay,
      ease: 'power2.out' 
    }
  );
};

export const staggerFadeIn = (selector: string, staggerDelay = 0.1) => {
  gsap.fromTo(selector,
    { opacity: 0, y: 30, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: staggerDelay
    }
  );
};