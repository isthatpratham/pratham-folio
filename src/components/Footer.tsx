import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  useEffect(() => {
    // Particle animation
    gsap.to('.particle', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

    // Footer fade in
    gsap.fromTo('.footer-content',
      { opacity: 0, y: 60, filter: 'blur(5px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const navItems = ['Home', 'About', 'Journey', 'Projects', 'Contact'];

  return (
    <footer className="footer-section relative py-16 bg-black overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/10 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="footer-content max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-3xl font-light text-white mb-4">AiiR</div>
          <p className="text-gray-400 max-w-md mx-auto">
            Crafting digital experiences that inspire and innovate
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-spline-light-grey transition-colors text-sm font-light"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Pratham Debnath © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;