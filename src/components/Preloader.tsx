import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import profileImg from '../images/Dev_Photo.jpeg';
import editorProfileImg from '../images/Editor_Photo.png';

const Preloader: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set('.preloader', { opacity: 1 });
    gsap.set('.progress-circle-fill', { strokeDashoffset: 251.3 });
    gsap.set('.editor-img', { opacity: 0 });
    gsap.set('.main', { opacity: 0 });

    // Progress bar animation
    tl.to('.progress-circle-fill', {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: 'power2.out',
    })
      .to('.editor-img', {
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
      }, 0)
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
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* The circular progress bar SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96">
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#888888" />
            </linearGradient>
          </defs>
          {/* Background track circle */}
          <circle
            cx="48"
            cy="48"
            r="40"
            className="stroke-gray-800"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Animating progress circle */}
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="url(#progress-gradient)"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="251.3"
            strokeDashoffset="251.3"
            strokeLinecap="round"
            className="progress-circle-fill"
          />
        </svg>

        {/* Images inside the circle */}
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden relative z-10">
          {/* Dev_Photo.jpeg */}
          <img 
            src={profileImg} 
            alt="Developer persona" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Editor_Photo.png */}
          <img 
            src={editorProfileImg} 
            alt="Editor persona" 
            className="editor-img absolute inset-0 w-full h-full object-cover"
          />
        </div>
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