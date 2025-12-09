import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set('.preloader', { opacity: 1 });
    gsap.set('.progress-bar-fill', { width: '0%' });
    gsap.set('.main', { opacity: 0 });
    
    // Progress bar animation
    tl.to('.progress-bar-fill', {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out',
    })
    .to('.preloader-text', {
      opacity: 0.6,
      duration: 0.5,
    }, '-=0.5')
    .to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        document.querySelector('.preloader')?.remove();
        gsap.to('main', {
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        });
      }
    }, '+=0.3');
  }, []);

  return (
    <div className="preloader fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="preloader-text text-6xl md:text-8xl font-light text-white mb-8">
          AiiR
        </h1>
        <div className="text-spline-light-grey text-lg font-light tracking-widest">
          LOADING EXPERIENCE
        </div>
      </div>
      
      <div className="progress-container w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="progress-bar-fill h-full bg-gradient-to-r from-spline-white to-spline-grey rounded-full"></div>
      </div>
      
      <div className="mt-8 text-gray-400 text-sm">
        Initializing portfolio...
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-md animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Preloader;