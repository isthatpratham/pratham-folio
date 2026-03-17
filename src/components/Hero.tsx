import React, { useEffect } from 'react';
import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import profileImg from '../images/pratham.jpg';

const Hero: React.FC = () => {
  useEffect(() => {
    // Hero animations after preloader
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo('.hero-content-main > *',
      { opacity: 0, y: 40, filter: 'blur(15px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.15, ease: 'power4.out' }
    )
      .fromTo('.hero-badge-v2',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)' }, '-=0.8'
      )
      .fromTo('.hero-profile-visual',
        { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }, '-=1'
      );
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent py-20 lg:py-0"
    >
      {/* Background Atmosphere removed - now global in App.tsx */}

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <div className="max-w-3xl hero-content-main text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="hero-badge-v2 inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/60">Available for specialized roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-white tracking-tighter leading-[0.85] mb-10">
              Hi, I'm <br />
              <span className="hero-name-gradient text-glow relative inline-block">
                Pratham
                <div className="absolute -inset-x-6 -inset-y-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-30"></div>
              </span>
            </h1>

            {/* Subheadline & Description */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white/90 tracking-tight">
                Full-Stack Web Developer, Video Editor & Author
              </h2>
              <p className="text-lg md:text-xl text-white/40 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
                I build <span className="text-white/70 italic">fast, scalable web systems</span> and craft <br className="hidden md:block" />
                <span className="text-white/70 italic">cinematic visual experiences</span> that define brands and <span className="text-white/70 italic">write poetries and novels.</span>
              </p>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-5 sm:space-y-0 sm:space-x-8">
              <button
                onClick={scrollToProjects}
                className="btn-premium group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Explore My Work</span>
                  <ArrowDown className="group-hover:translate-y-1 transition-transform" weight="bold" size={18} />
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="btn-premium w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white/10 rounded-full font-bold backdrop-blur-sm hover:border-white/30"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-20 flex items-center justify-center lg:justify-start space-x-8 text-white/20">
              <div className="w-16 h-[1px] bg-white/5"></div>
              <a href="https://github.com/isthatpratham" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><GithubLogo size={24} /></a>
              <a href="https://www.linkedin.com/in/pratham-debnath-894471314/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><LinkedinLogo size={24} /></a>
              <a href="https://www.instagram.com/prathamfrsure/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><InstagramLogo size={24} /></a>
              <a href="https://leetcode.com/u/prathamfrsure/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Visual */}
          <div className="hero-profile-visual order-1 lg:order-2 flex items-center justify-center relative">
            <div className="relative animate-float-slow profile-glow">
              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-4 border border-white/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 -m-8 border border-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>
              <div className="absolute inset-0 -m-12 border border-white/[0.02] rounded-full animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

              {/* Radial Glow Blend */}
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 opacity-30"></div>

              {/* Image Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] p-2 rounded-full image-ring overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none"></div>
                <img
                  src={profileImg}
                  alt="Pratham"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Subtle Floating Badge/Accent */}
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-[#0A0A0A] border border-white/10 p-3 rounded-full backdrop-blur-xl shadow-2xl animate-float" style={{ animationDelay: '-1s' }}>
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicators Refined */}
      <div className="absolute bottom-12 left-10 hidden xl:flex flex-col items-center space-y-6">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 [writing-mode:vertical-lr] select-none">Scroll Down</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;