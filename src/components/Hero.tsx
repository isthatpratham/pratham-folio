import React, { useEffect } from 'react';
import { ArrowDown } from '@phosphor-icons/react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  useEffect(() => {
    // Hero animations after preloader
    const tl = gsap.timeline({ delay: 4 });
    
    tl.fromTo('.hero-headline', 
      { opacity: 0, x: -50, filter: 'blur(10px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '-=1.2'
    )
    .fromTo('.hero-cta',
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.3'
    );

    // Floating orbs
    gsap.to('.glow-orb-1', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.glow-orb-2', {
      y: 15,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });

    // CTA hover animation
    const ctaButton = document.querySelector('.hero-cta');
    ctaButton?.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, { scale: 1.05, duration: 0.3 });
    });
    ctaButton?.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, { scale: 1, duration: 0.3 });
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src="https://my.spline.design/thresholddarkambientui-eTc1DILwjtjLmLzFco44c24q/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
        />
      </div>
      
      {/* Floating Orbs */}
      <div className="glow-orb-1 absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="glow-orb-2 absolute bottom-1/4 right-1/3 w-48 h-48 bg-gray-400/5 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 max-w-full mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-32 items-center mb-16">
          {/* Left side - Headline */}
          <div className="text-center md:text-left mb-4 md:mb-0 md:pl-4 lg:pl-8">
            <h1 className="hero-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi,<br className="hidden sm:block" /> I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Pratham</span>
            </h1>
          </div>
          
          {/* Right side - Subtitle */}
          <div className="text-center md:text-right md:pr-4 lg:pr-8">
            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              A Full-Stack Web Developer<br className="hidden md:block" />
              crafting immersive<br className="hidden md:block" />
              digital experiences
            </p>
          </div>
        </div>
        
        {/* CTA Button - Centered and moved down */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button className="hero-cta group bg-gradient-to-r from-spline-white to-spline-dark-grey text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
            <span className="flex items-center space-x-2">
              <span>Explore My Work</span>
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40 mb-2"></div>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;